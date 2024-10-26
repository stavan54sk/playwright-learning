// // const { test, expect } = require('@playwright/test');



// // const testCases = [
// //   { name: 'Alice', expected: 'Hello, Alice!' },
// //   { name: 'Bob', expected: 'Hello, Bob!' },
// //   { name: 'Charlie', expected: 'Hello, Charlie!' }
// // ];

// // testCases.forEach(({ name, expected }) => {
// //   test(`Testing greeting with ${name}`, async ({ page }) => {
// //     await page.goto(`https://example.com/greet?name=${name}`);
// //     await expect(page.getByRole('heading')).toHaveText(expected);
// //   });
// // });



// // const { defineConfig } = require('@playwright/test');

// // module.exports = defineConfig({
// //   projects: [
// //     {
// //       name: 'Alice',
// //       use: {
// //         person: 'Alice'
// //       }
// //     },
// //     {
// //       name: 'Bob',
// //       use: {
// //         person: 'Bob'
// //       }
// //     }
// //   ]
// // });

// // const { test, expect } = require('@playwright/test');

// // test('Test with parameterized project', async ({ page, person }) => {
// //   await page.goto('https://example.com/greet');
// //   await expect(page.locator('#node')).toContainText(person);
// // });

// // test(`example test`, async ({ page }) => {
// //     // ...

// //     console.log(process.env.USER_NAME)

// //     console.log(process.env.PASSWORD)

// //     console.log(process.env.ENV)
  
// //   });


// import fs from 'fs';
// import path from 'path';
// import { test } from '@playwright/test';
// import { parse } from 'csv-parse/sync';

// const records = parse(fs.readFileSync(path.join(__dirname, 'input.csv')), {
//   columns: true,
//   skip_empty_lines: true
// });

// for (const record of records) {
//   test(`foo: ${record.test_case}`, async ({ page }) => {
//     console.log(record.test_case, record.some_value, record.some_other_value);
//   });
// }


  
