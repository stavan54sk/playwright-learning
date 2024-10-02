// import { test, expect } from '@playwright/test';

// test('POST - Create a new user', async ({ request }) => {
//   const response = await request.post('https://reqres.in/api/users', {
//     data: {
//       name: 'John Doe',
//       job: 'Software Developer'
//     }
//   });

//   expect(response.ok()).toBeTruthy();
//   expect(response.status()).toBe(201);

//   const responseBody = await response.json();
//   expect(responseBody.name).toBe('John Doe');
//   expect(responseBody.job).toBe('Software Developer');
//   expect(responseBody.id).toBeDefined();
//   expect(responseBody.createdAt).toBeDefined();
// });

// test('PUT - Update an existing user', async ({ request }) => {
//     const response = await request.put('https://reqres.in/api/users/2', {
//       data: {
//         name: 'Jane Doe',
//         job: 'Product Manager'
//       }
//     });

//     expect(response.ok()).toBeTruthy();
//     expect(response.status()).toBe(200);

//     const responseBody = await response.json();
//     expect(responseBody.name).toBe('Jane Doe');
//     expect(responseBody.job).toBe('Product Manager');
//     expect(responseBody.updatedAt).toBeDefined();
//   });

//   test('GET - Fetch user details', async ({ request }) => {
//     const response = await request.get('https://reqres.in/api/users/2');

//     expect(response.ok()).toBeTruthy();
//     expect(response.status()).toBe(200);

//     const responseBody = await response.json();
//     expect(responseBody.data.id).toBe(2);
//     expect(responseBody.data.first_name).toBeDefined();
//     expect(responseBody.data.last_name).toBeDefined();
//     expect(responseBody.data.email).toBeDefined();
//   });

//   test('DELETE - Delete a user', async ({ request }) => {
//     const response = await request.delete('https://reqres.in/api/users/2');

//     expect(response.status()).toBe(204); // 204 No Content - successful deletion with no response body
//   });

// const { test, expect } = require('@playwright/test');

// test('API Test with Headers, Query Params, and Body on HTTPBin', async ({ request }) => {
//     // API Endpoint with query parameters
//     const baseUrl = 'https://httpbin.org/post';

//     const queryParams = {
//         'foo': 'bar',
//         'baz': 'qux'
//     };

//     // Construct URL with query parameters
//     const urlWithParams = new URL(baseUrl);
//     Object.keys(queryParams).forEach(key =>
//         urlWithParams.searchParams.append(key, queryParams[key])
//     );

//     // Define headers
//     const headers = {
//         'Content-Type': 'application/json',
//         'Custom-Header': 'CustomValue'
//     };

//     // Define request body
//     const requestBody = {
//         'name': 'John Doe',
//         'age': 30,
//         'job': 'Engineer'
//     };

//     // Make the POST request with headers, query params, and body
//     const response = await request.post(urlWithParams.href, {
//         headers: headers,
//         data: JSON.stringify(requestBody)
//     });

//     // Assertions
//     expect(response.status()).toBe(200);  // Check the status code

// });