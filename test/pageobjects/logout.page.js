import {$, expect} from '@wdio/globals';

class LogoutPage {
    get logoutButton() {return $(`~Logout`);}
    get profileButton() {return $(`~PROFIL`);}

    async logout() {
        await this.profileButton.waitForDisplayed({ timeout: 5000 });
        await this.profileButton.click();
        await driver.$('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Logout"))');
        await this.logoutButton.waitForDisplayed({ timeout: 5000 });
        await this.logoutButton.click();
    }
}

export default new LogoutPage();