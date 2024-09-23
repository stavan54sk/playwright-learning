// // // WIHTOUT FIXTURES CODE START

// // const { test } = require('@playwright/test');
// // const { TodoPage } = require('./todo-page');

// // test.describe('todo tests', () => {
// //     let todoPage;

// //     test.beforeEach(async ({ page }) => {
// //         todoPage = new TodoPage(page);
// //         await todoPage.goto();
// //         await todoPage.addToDo('item1');
// //         await todoPage.addToDo('item2');
// //     });

// //     test.afterEach(async () => {
// //         await todoPage.removeAll();
// //     });

// //     test('should add an item', async () => {
// //         await todoPage.addToDo('my item');
// //         // ...
// //     });

// //     test('should remove an item', async () => {
// //         await todoPage.remove('item1');
// //         // ...
// //     });
// // });
// // // WIHTOUT FIXTURES CODE END

// // // WITH FIXTURES CODE START
// import { test as base } from '@playwright/test';
// import { TodoPage } from './todo-page';

// const test = base.extend < { todoPage: TodoPage } > ({
//     todoPage: async ({ page }, use) => {
//         const todoPage = new TodoPage(page);
//         await todoPage.goto();
//         await todoPage.addToDo('item1');
//         await todoPage.addToDo('item2');
//         await use(todoPage);
//         await todoPage.removeAll();
//     },
// });

// test('should add an item', async ({ todoPage }) => {
//     await todoPage.addToDo('my item');
//     // ...
// });
// // // WITH FIXTURES CODE END


// // Creating Custom Fixtures start
// import { test as base } from '@playwright/test';
// import { TodoPage } from './todo-page';
// import { SettingsPage } from './settings-page';
// import { start } from 'repl';

// type MyFixtures = {
//     todoPage: TodoPage;
//     settingsPage: SettingsPage;
// };

// export const test = base.extend < MyFixtures > ({
//     todoPage: async ({ page }, use) => {
//         const todoPage = new TodoPage(page);
//         await todoPage.goto();
//         await todoPage.addToDo('item1');
//         await use(todoPage);
//         await todoPage.removeAll();
//     },
//     settingsPage: async ({ page }, use) => {
//         await use(new SettingsPage(page));
//     },
// });

// // Creating Custom Fixtures end

// // Using Fixtures start

// import { test, expect } from './my-test';

// test.beforeEach(async ({ settingsPage }) => {
//     await settingsPage.switchToDarkMode();
// });

// test('basic test', async ({ todoPage, page }) => {
//     await todoPage.addToDo('something nice');
//     await expect(page.getByTestId('todo-title')).toContainText(['something nice']);
// });

// // Using Fixtures end

// // Overriding Fixtures start

// import { test as base } from '@playwright/test';

// export const test = base.extend({
//     page: async ({ baseURL, page }, use) => {
//         await page.goto(baseURL);
//         await use(page);
//     },
// });

// // Overriding Fixtures end

// // Refer DOc for more details and code for Fixtures