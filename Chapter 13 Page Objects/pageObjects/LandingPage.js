exports.LandingPage=class LandingPage{

    constructor(page){
        this.page=page;
        this.loginButton = page.getByRole('link', { name: ' Login' }).click();
     
    }

    async clickLoginButton(){
       await this.loginButton.click();
    }

   async navigateToLandingPage(){
        await this.page.goto('https://courses.rahulshettyacademy.com/');
    }

}
