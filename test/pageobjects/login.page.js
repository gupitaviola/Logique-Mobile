import {$, expect} from '@wdio/globals';

class LoginPage {
    get emailInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    get passwordInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(1)');}
    get loginButton() {return $('android=new UiSelector().description("Masuk")');}

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

    /**
     * Opens login page and performs login
     * @param {string} email 
     * @param {string} password 
     */
    async openLoginPage(email, password) {
        await this.fillInput(this.emailInput, email);
        await this.fillInput(this.passwordInput, password);
        await driver.hideKeyboard();
        await this.loginButton.waitForDisplayed({ timeout: 5000 });
        await this.loginButton.click();
    }
}

export default new LoginPage();