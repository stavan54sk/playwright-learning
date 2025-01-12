class RegistrationPage{

    constructor(page){
        this.page=page;
        this.usernameinput = page.locator('#ConnectInput0');
        this.passwordinput = page.locator('#ConnectInput1');
        this.password = page.locator('//button[contains(text(),"Sign in")]');


    }


}