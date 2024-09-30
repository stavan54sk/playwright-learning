const { test, expect } = require('@playwright/test')

test('first API test', async ({ request }) => {

    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "test",
            "job": "mytester"
        }
    })

    expect(response.status()).toBe(201);

    expect(response.ok()).toBeTruthy();

    const responseBody =await response.json();

    expect(responseBody.name).toBe('John Doe');

    expect(responseBody.job).toBe('Software Developer');

    expect(responseBody.id).toBeDefined();

    expect(responseBody.createdAt).toBeDefined();

})