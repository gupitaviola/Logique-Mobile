import RegisterPage from '../pageobjects/register.page.js';
import LoginPage from '../pageobjects/login.page.js';
import GadaiBPKBPage from '../pageobjects/gadaiBPKB.page.js';
import LogoutPage from '../pageobjects/logout.page.js';

describe('End to End: Register - Login - Create Gadai BPKB - Logout', () => {
    it('user should be able to register', async () => {

        //Registration Process
        await RegisterPage.openRegisterPage();
        const email = `test${Date.now()}@example.com`; 
        const phoneNumber = `0812${Date.now().toString().slice(-8)}`;
        const password = 'Sample@1234';

        await RegisterPage.register(email, 'test account', phoneNumber, password, password);

        await expect(RegisterPage.enterButton).toBeDisplayed({setTimeout: 10000});

        //Login Process
        await LoginPage.openLoginPage(email, password);

        //Create Gadai BPKB Mobil Fidusia
        //await GadaiBPKBPage.openGadaiBPKBPage();
        //await GadaiBPKBPage.fillInformasiKendaraan('Fidusia', 'Fidusia', '2020', 'B 1234 AB', 'Gupita', '2023-01-01', '100000', 'Hitam', '1');
        
        //Logout Process
        await LogoutPage.logout();

    });
    
});