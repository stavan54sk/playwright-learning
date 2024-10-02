// const { test, request } = require('@playwright/test');

// test.describe('API Testing with JWT Authentication', () => {
  
//   let jwtToken = '';

//   // Step 1: Authenticate and retrieve JWT token
//   test.beforeAll(async () => {
//     const apiContext = await request.newContext();
    
//     const response = await apiContext.post('https://api.example.com/login', {
//       data: {
//         username: 'user@example.com',
//         password: 'password123',
//       },
//     });

//     // Assert that the response is successful
//     expect(response.ok()).toBeTruthy();

//     // Extract the JWT token from the response
//     const responseBody = await response.json();
//     jwtToken = responseBody.token;

//     console.log('JWT Token:', jwtToken); // Print token for debugging (optional)
//   });

//   // Step 2: Access a protected endpoint using the JWT token
//   test('Get user profile using JWT', async () => {
//     const apiContext = await request.newContext({
//       extraHTTPHeaders: {
//         'Authorization': `Bearer ${jwtToken}`, // Add JWT in Authorization header
//       },
//     });

//     const response = await apiContext.get('https://api.example.com/user/profile');

//     // Assert that the request was successful
//     expect(response.status()).toBe(200);

// });
// });

// test.describe('API Testing with OAuth 2.0 Authentication', () => {

//     let accessToken = '';
  
//     // Step 1: Get OAuth 2.0 Access Token
//     test.beforeAll(async () => {
//       const apiContext = await request.newContext();
  
//       const response = await apiContext.post('https://auth.example.com/oauth/token', {
//         data: {
//           grant_type: 'client_credentials',
//           client_id: 'your-client-id',
//           client_secret: 'your-client-secret',
//           scope: 'read write',
//         },
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded'
//         }
//       });
  
//       // Assert that the response is successful
//       expect(response.ok()).toBeTruthy();
  
//       // Extract the OAuth 2.0 access token
//       const responseBody = await response.json();
//       accessToken = responseBody.access_token;
  
//       console.log('Access Token:', accessToken); // Print token for debugging (optional)
//     });
  
//     // Step 2: Access a Protected API Endpoint using OAuth 2.0 Token
//     test('Get data using OAuth 2.0 token', async () => {
//       const apiContext = await request.newContext({
//         extraHTTPHeaders: {
//           'Authorization': `Bearer ${accessToken}`, // Use the OAuth 2.0 token
//         },
//       });
  
//       const response = await apiContext.get('https://api.example.com/data');
  
//       // Assert that the request was successful
//       expect(response.status()).toBe(200);
  
//       // Check the content of the response (optional)
//       const data = await response.json();
//       console.log(data); // For debugging
  
//       // Perform assertions on the response body
//       expect(data).toHaveProperty('id');
//       expect(data).toHaveProperty('name');
//     });
//   });