// import { test, expect } from '@playwright/test';

// test('GET - Response Structure Validation', async ({ request }) => {
//     const response = await request.get('https://reqres.in/api/users/2');

//     // Check if the response is successful
//     expect(response.ok()).toBeTruthy();
//     expect(response.status()).toBe(200);

//     // Parse the response body as JSON
//     const responseBody = await response.json();

//     // Validate response structure
//     expect(responseBody).toHaveProperty('data');
//     expect(responseBody).toHaveProperty('support');
// });

// // Test 2: Field Validation for User Data
// test('GET - Field Validation for User Data', async ({ request }) => {
//     const response = await request.get('https://reqres.in/api/users/2');

//     // Check if the response is successful
//     expect(response.ok()).toBeTruthy();

//     // Parse the response body as JSON
//     const responseBody = await response.json();

//     // Validate fields in 'data' object
//     expect(responseBody.data).toHaveProperty('id', 2); // ID validation
//     expect(responseBody.data).toHaveProperty('email', 'janet.weaver@reqres.in'); // Email validation
//     expect(responseBody.data).toHaveProperty('first_name', 'Janet'); // First Name validation
//     expect(responseBody.data).toHaveProperty('last_name', 'Weaver'); // Last Name validation
//     expect(responseBody.data).toHaveProperty('avatar'); // Avatar field existence
// });

// // Test 3: Regex Validation for Avatar URL
// test('GET - Regex Validation for Avatar URL', async ({ request }) => {
//     const response = await request.get('https://reqres.in/api/users/2');

//     // Check if the response is successful
//     expect(response.ok()).toBeTruthy();

//     // Parse the response body as JSON
//     const responseBody = await response.json();

//     // Validate avatar URL using regex
//     const avatarUrlRegex = /^https:\/\/reqres.in\/img\/faces\/2-image.jpg$/;
//     expect(responseBody.data.avatar).toMatch(avatarUrlRegex);
// });

// // Test 4: Field Validation for Support Object
// test('GET - Field Validation for Support Object', async ({ request }) => {
//     const response = await request.get('https://reqres.in/api/users/2');

//     // Check if the response is successful
//     expect(response.ok()).toBeTruthy();

//     // Parse the response body as JSON
//     const responseBody = await response.json();

//     // Validate fields in 'support' object
//     expect(responseBody.support).toHaveProperty('url', 'https://reqres.in/#support-heading'); // Support URL validation
//     expect(responseBody.support).toHaveProperty('text', 'To keep ReqRes free, contributions towards server costs are appreciated!'); // Support Text validation
// });