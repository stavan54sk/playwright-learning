import { test, expect } from '@playwright/test';

test.describe('API and UI Integration Test', () => {
  
  test('Validate user data from API with UI', async ({ request, page }) => {
    // Step 1: Fetch data from API
    const apiResponse = await request.get('https://reqres.in/api/users/2');
    expect(apiResponse.ok()).toBeTruthy(); // Ensure the API call was successful
    
    const apiData = await apiResponse.json();
    
    const userData = {
      id: apiData.data.id,
      firstName: apiData.data.first_name,
      lastName: apiData.data.last_name,
      email: apiData.data.email,
      avatar: apiData.data.avatar
    };

    // Step 2: Navigate to UI and validate data
    // Assume we have a webpage that displays user info: 'https://example.com/user/2'
    await page.goto('https://reqres.in/api/users/2');

    // Validate that the user's name on the UI matches the API response
    const displayedFirstName = await page.textContent('#first_name')
    const displayedLastName = await page.textContent('#last_name');
    const displayedEmail = await page.textContent('#email');
    const displayedAvatar = await page.getAttribute('#avatar', 'src');
    
    // Step 3: Compare API data with UI data
    expect(displayedFirstName).toBe(userData.firstName);
    expect(displayedLastName).toBe(userData.lastName);
    expect(displayedEmail).toBe(userData.email);
    expect(displayedAvatar).toBe(userData.avatar);
  });
  
});