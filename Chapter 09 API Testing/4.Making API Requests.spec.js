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