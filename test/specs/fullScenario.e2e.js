import RegisterPage from '../pageobjects/register.page.js';
import LoginPage from '../pageobjects/login.page.js';
import GadaiBPKBPage from '../pageobjects/gadaiBPKB.page.js';
import LogoutPage from '../pageobjects/logout.page.js';

describe('End to End: Register - Login - Create Gadai BPKB - Logout', () => {
    it('user can register then login and logout', async () => {

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
        //await GadaiBPKBPage.fillInformasiKendaraan('Fidusia', 'Fidusia', '2020', 'B 1234 AB', 'Gupita', '2023-01-01', '100000', 'Hitam', '100.000.000');
        //await GadaiBPKBPage.fillInformasiDataNasabah('Jalan Suprapto 12', 'Terawat', 'Bagus', 'Jalan Raya', '5')
        //await GadaiBPKBPage.fillInformasiUsaha('Bakpia Mantap', 'Jalan Tidar 245', 'Owner', '8978899878990', 'Pribadi', '10', '20.000.000', '50.000.000', 'X565NIB8979', 'Makanan', '20', '50');
        //await GadaiBPKBPage.checkPernyataanAndProses();
        
        //Logout Process
        await LogoutPage.logout();

    });
    
});