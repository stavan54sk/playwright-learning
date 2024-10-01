// import { test, expect, APIRequestContext } from '@playwright/test';

// test.describe('API Testing - Create User', () => {

// // Set up an APIRequestContext before the tests begin
// let apiContext :APIRequestContext;

// test.beforeAll(async ({ playwright }) => {
//     apiContext = await playwright.request.newContext({
//         baseURL: 'https://reqres.in'
//     });
// })

// test('Create a new user - Functional Test', async () => {
//     const response = await apiContext.post('/api/users', {
//       data: {
//         name: 'John Doe',
//         job: 'Software Developer'
//       }
//     })
//    expect(response.status()).toBe(201);
//    expect(response.ok()).toBeTruthy();
// })

// test.afterAll(async () => {
//     await apiContext.dispose();
// });

// });