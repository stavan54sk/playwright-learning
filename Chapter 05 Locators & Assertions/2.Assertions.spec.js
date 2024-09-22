import { test, expect, Page } from '@playwright/test';

test('navigates to login', async ({ page }) => {
   // ...
   const response = await page.request.get('https://playwright.dev');

   await expect(response).toBeOK();

});

// test('assert a value', async ({ page }) => {

//    // const value = 1;

//    // expect(value).toBe(2);

// });

// test('match instance of a class', async ({ page }) => {

//    class Example { }

//    expect(new Example()).toEqual(expect.any(Example));

//    expect(page).toBeInstanceOf(Page);

// });

test('match any number', async ({ page }) => {

   expect({ prop: 1 }).toEqual({ prop: expect.any(Number) });

});

test('match any string', async ({ page }) => {

   expect('abc').toEqual(expect.any(String));

});

test('match any anything', async ({ page }) => {

   const value = { prop: 1 };
   expect(value).toEqual({ prop: expect.anything() });
   expect(value).not.toEqual({ otherProp: expect.anything() });

});

test('arrayContaining', async ({ page }) => {

   expect([1, 2, 3]).toEqual(expect.arrayContaining([3, 1]));
   expect([1, 2, 3]).not.toEqual(expect.arrayContaining([1, 4]));

});

test('closeTo', async ({ page }) => {

   expect({ prop: 0.1 + 0.2 }).not.toEqual({ prop: 0.3 });
   expect({ prop: 0.1 + 0.2 }).toEqual({ prop: expect.closeTo(0.3, 5) });

});


test('assert some of the properties', async ({ page }) => {

   expect({ foo: 1, bar: 2 }).toEqual(expect.objectContaining({ foo: 1 }));

});

test('matchers can be used on the properties as well', async ({ page }) => {

   expect({ foo: 1, bar: 2 }).toEqual(expect.objectContaining({ bar: expect.any(Number) }));


});

test('stringContaining', async ({ page }) => {

   expect('Hello world!').toEqual(expect.stringContaining('Hello'));

});

test('stringMatching', async ({ page }) => {

   expect('123ms').toEqual(expect.stringMatching(/\d+m?s/));

});

test('toBe', async ({ page }) => {

   const value = { prop: 1 };
   expect(value).toBe(value);
   expect(value).not.toBe({});
   expect(value.prop).toBe(1);

});

test('toBeCloseTo', async ({ page }) => {

   const value = { prop: 1 };
   expect(value).toBe(value);
   expect(value).not.toBe({});
   expect(value.prop).toBe(1);

});

test('toBeDefined', async ({ page }) => {

   const value = null;
   expect(value).toBeDefined();

});

test('toBeFalsy', async ({ page }) => {

   const value = null;
   expect(value).toBeFalsy();

});

test('toBeGreaterThan', async ({ page }) => {

   const value = 42;
   expect(value).toBeGreaterThan(1);

});

test('toBeGreaterThanOrEqual', async ({ page }) => {

   const value = 42;
   expect(value).toBeGreaterThanOrEqual(42);

});

test('toBeLessThan', async ({ page }) => {

   const value = 42;
   expect(value).toBeLessThan(100);

});

test('toBeLessThanOrEqual', async ({ page }) => {

   const value = 42;
   expect(value).toBeLessThanOrEqual(42);

});

test('toBeNaN', async ({ page }) => {

   const value = NaN;
   expect(value).toBeNaN();

});

test('toBeNull', async ({ page }) => {

   const value = null;
   expect(value).toBeNull();

});

test('toBeTruthy', async ({ page }) => {

   const value = { example: 'value' };
   expect(value).toBeTruthy();

});

test('toBeUndefined', async ({ page }) => {

   const value = undefined;
   expect(value).toBeUndefined();

});

test('toContain string', async ({ page }) => {

   const value = 'Hello, World';
   expect(value).toContain('World');
   expect(value).toContain(',');

});

test('toContain array', async ({ page }) => {

   const value = [1, 2, 3];
   expect(value).toContain(2);
   expect(new Set(value)).toContain(2);

});

test('toContainEqual', async ({ page }) => {

   const value = [
      { example: 1 },
      { another: 2 },
      { more: 3 },
   ];
   expect(value).toContainEqual({ another: 2 });
   expect(new Set(value)).toContainEqual({ another: 2 });

});

test('toEqual NonStrict', async ({ page }) => {

   const value = { prop: 1 };
   expect(value).toEqual({ prop: 1 });

});

test('toEqual Strict', async ({ page }) => {

   const value = { prop: 1 };
   expect(value).toStrictEqual({ prop: 1 });

});

test('Pattern matching', async ({ page }) => {

   expect({
      list: [1, 2, 3],
      obj: { prop: 'Hello world!', another: 'some other value' },
      extra: 'extra',
   }).toEqual(expect.objectContaining({
      list: expect.arrayContaining([2, 3]),
      obj: expect.objectContaining({ prop: expect.stringContaining('Hello') }),
   }));

});

test('toHaveLength', async ({ page }) => {

   expect('Hello, World').toHaveLength(12);
   expect([1, 2, 3]).toHaveLength(3);

});

test('toHaveProperty', async ({ page }) => {

   const value = {
      a: {
         b: [42],
      },
      c: true,
   };
   expect(value).toHaveProperty('a.b');
   expect(value).toHaveProperty('a.b', [42]);
   expect(value).toHaveProperty('a.b[0]', 42);
   expect(value).toHaveProperty('c');
   expect(value).toHaveProperty('c', true);

});

test('toMatch', async ({ page }) => {

   const value = 'Is 42 enough?';
   expect(value).toMatch(/Is \d+ enough/);

});

test('toMatchObject', async ({ page }) => {

   const value = {
      a: 1,
      b: 2,
      c: true,
   };
   expect(value).toMatchObject({ a: 1, c: true });
   expect(value).toMatchObject({ b: 2, c: true });

   expect([{ a: 1, b: 2 }]).toMatchObject([{ a: 1 }]);

});

test('toThrow', async ({ page }) => {

   expect(() => {
      throw new Error('Something bad');
   }).toThrow();

   expect(() => {
      throw new Error('Something bad');
   }).toThrow(Error);

   // expect(() => {
   //    throw new Error('Something bad');
   // }).toThrow(/something/);



});

test('toThrowError', async ({ page }) => {

   expect(() => {
      throw new Error('Something bad');
   }).toThrowError();

});

test('not (generic)', async ({ page }) => {

   const value = 1;
   expect(value).not.toBe(2);

});


test('toHaveText', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/index.html");

   await expect(page.locator('[href="web-form.html"]')).toHaveText('Web form');
});


test('toBeAttached', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/index.html");

   await expect(page.locator('[href="web-form.html"]')).toBeAttached()
});

test('toBeChecked', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

   await expect(page.locator('[name="my-check"]').first()).toBeChecked();
});

test('toBeDisabled', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

   await expect(page.locator('[name="my-disabled"]').first()).toBeDisabled();
});

test('toBeEditable', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

   await expect(page.locator('[name="my-text"]').first()).toBeEditable();
});

test('toBeEmpty', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

   await page.locator('[name="my-text"]').first().fill('test')

   await page.locator('[name="my-text"]').first().clear();

   await expect(page.locator('[name="my-text"]').first()).toBeEmpty();
});

test('toBeEnabled', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

   await page.locator('[name="my-text"]').first().fill('test')

   await page.locator('[name="my-text"]').first().clear();

   await expect(page.locator('[name="my-text"]').first()).toBeEnabled();
});

test('toBeFocused', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

   await page.locator('[name="my-text"]').first().fill('test')

   await page.locator('[name="my-text"]').first().clear();

   await expect(page.locator('[name="my-text"]').first()).toBeFocused();
});

test('toBeHidden', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

   await expect(page.locator('[type="hidden"]').first()).toBeHidden();
});

// test('toBeInViewport', async ({ page }) => {

//    const locator = page.getByRole('button');
//    // Make sure at least some part of element intersects viewport.
//    await expect(locator).toBeInViewport();
//    // Make sure element is fully outside of viewport.
//    await expect(locator).not.toBeInViewport();
//    // Make sure that at least half of the element intersects viewport.
//    await expect(locator).toBeInViewport({ ratio: 0.5 });

// });

test('toBeVisible', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

   await expect(page.locator('[name="my-textarea"]').first()).toBeVisible();
});

test('toContainText', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

   await expect(page.locator('[href="./index.html"]').first()).toContainText('Return');
});

// test('toHaveAccessibleDescription', async ({ page }) => {

//    const locator = page.getByTestId('save-button');
//    await expect(locator).toHaveAccessibleDescription('Save results to disk');

// });

test('toHaveAttribute(name, value)', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

   await expect(page.locator('[href="./index.html"]').first()).toHaveAttribute('href', './index.html');

});

test('toHaveAttribute(name)', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

   await expect(page.locator('[href="./index.html"]').first()).toHaveAttribute('href');

   await expect(page.locator('[href="./index.html"]').first()).not.toHaveAttribute('type');

});

test('toHaveClass', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

   await expect(page.locator('[name="my-readonly"]').first()).toHaveClass('form-control');


});

test('toHaveCount', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

   await expect(page.locator('//a').first()).toHaveCount(1);

});

// test('toHaveCSS', async ({ page }) => {

//    await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

//    await expect(page.locator('//a').first()).toHaveCSS('display', 'flex');

// });

test('toHaveId', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

   await expect(page.locator('[name="my-check"]').first()).toHaveId('my-check-1');

});

// test('toHaveJSProperty', async ({ page }) => {

//    await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

//    await expect(page.locator('[name="my-check"]').first()).toHaveJSProperty('my-check-1');

// });

test('toHaveRole', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

   await expect(page.locator('[name="my-text"]')).toHaveRole('textbox');

});

// test('toHaveScreenshot(name)', async ({ page }) => {

//    await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

//    await expect(page.locator('[name="my-text"]')).toHaveScreenshot('textbox.png');

// });

// test('toHaveScreenshot', async ({ page }) => {

//    await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

//    await expect(page.locator('[name="my-text"]')).toHaveScreenshot();

// });

// test('toHaveText', async ({ page }) => {

//    await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

//    await expect(page.locator('//select//option')).toHaveText('sd');

// });



test('toHaveValue', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

   await expect(page.locator('[name="my-readonly"]')).toHaveValue("Readonly input");

});

// test('toHaveValues', async ({ page }) => {

//    await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

//    await expect(page.locator('[name="my-readonly"]')).toHaveValues("Readonly input");

// });

test('not (locators)', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

   await expect(page.locator('[name="my-readonly"]')).not.toHaveValue("Readoly input");

});

// test('toHaveScreenshot(name)', async ({ page }) => {

//    await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

//    await expect(page).toHaveScreenshot(test.jpg);

// });

// test('toHaveScreenshot()', async ({ page }) => {

//    await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

//    await expect(page).toHaveScreenshot();

// });

test('toHaveTitle()', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

   await expect(page).toHaveTitle('Hands-On Selenium WebDriver with Java');
   
});

test('toHaveURL()', async ({ page }) => {

   await page.goto("https://bonigarcia.dev/selenium-webdriver-java/web-form.html");

   await expect(page).toHaveURL('https://bonigarcia.dev/selenium-webdriver-java/web-form.html');
   
});