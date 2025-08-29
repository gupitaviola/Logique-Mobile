import {$, expect} from '@wdio/globals';

class RegisterPage {
    // Buttons
    get nextButton() {return $(`~Berikutnya`);}
    get enterButton() {return $(`~Masuk`);}
    get profileButton() {return $(`~PROFIL`);}
    get registerLink() {return $('android=new UiSelector().description("Belum punya akun? Daftar disini")');}
    get registerButton() {return $('android=new UiSelector().description("Daftar")');}

    // Input Fields
    get emailInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    get nameInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(1)');}
    get nomorTeleponInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(2)');}
    get passwordInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(3)');}
    get repeatPasswordInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(4)');}
    
    // Titles
    get registerTitle() {return $('android=new UiSelector().description("Daftar Baru")');}

/**
     * Helper method to fill input and validate its value
     * @param {WebdriverIO.Element} element 
     * @param {string} value 
     */
    async fillInput(element, value) {
        await element.waitForDisplayed({ timeout: 5000 });
        await element.click();
        await element.setValue(value);
        expect (await element.getAttribute('text')).toBe(value);
    }

    async openRegisterPage() {
        await this.nextButton.waitForDisplayed({timeout: 20000});
        await expect(this.nextButton).toBeDisplayed();
        // click next
        await this.nextButton.click();
        await browser.pause(2000); // wait for the next page to load
        await this.nextButton.click();

        await this.enterButton.waitForDisplayed({timeout: 20000});
        await expect(this.enterButton).toBeDisplayed();
        // click masuk
        await this.enterButton.click();

        await this.profileButton.waitForDisplayed({timeout: 20000});
        await expect(this.profileButton).toBeDisplayed();
        // click profil
        await this.profileButton.click();

        await this.registerLink.waitForDisplayed();
        await expect(this.registerLink).toBeDisplayed();
        // click register
        await this.registerLink.click();
        await expect(this.registerTitle).toBeDisplayed();
    }

    /**
     * 
     * @param {string} email 
     * @param {string} name 
     * @param {string} nomorTelepon 
     * @param {string} password 
     * @param {string} repeatPassword 
     */
    async register(email, name, nomorTelepon, password, repeatPassword) {
        await this.fillInput(this.emailInput, email);
        await this.fillInput(this.nameInput, name);
        await this.fillInput(this.nomorTeleponInput, nomorTelepon);
        await this.fillInput(this.passwordInput, password);
        await this.fillInput(this.repeatPasswordInput, repeatPassword);

        await driver.$('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Daftar")');
        await this.registerButton.waitForDisplayed({ timeout: 5000 });
        await this.registerButton.click();
    }
}

export default new RegisterPage();