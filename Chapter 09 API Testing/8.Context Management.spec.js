const {test, request, chromium } = require('@playwright/test');

test('global request ', async () => {
  (async () => {
    // Create a new global request context
    const requestContext = await request.newContext({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });

    // Send a GET request globally
    const response = await requestContext.get('/posts/1');
    console.log(await response.json());

    // Close the global request context
    await requestContext.dispose();
  })();
})


test('context request ', async () => {

  (async () => {
    // Launch the browser
    const browser = await chromium.launch();
    const context = await browser.newContext();

    // Use the browser context to create a new page
    const page = await context.newPage();

    // Make a request inside the context
    const response = await context.request.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(await response.json());

    // Close browser context and browser
    await browser.close();
  })();

})