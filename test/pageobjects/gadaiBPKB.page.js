import {$, expect} from '@wdio/globals';

class GadaiBPKBPage {
    get gadaiButton() {return $('~Gadai BPKB\nMobil Fidusia\nDetail');}
    //Informasi Kendaraan
    get merkInput() {return $('//android.widget.EditText[@hint="Masukkan merk kendaraan"]');}
    get jenisKendaraanInput() {return $('//android.widget.EditText[@hint="Masukkan jenis kendaraan"]');}
    get tahunKendaraanInput() {return $('//android.widget.EditText[@hint="Masukkan tahun kendaraan"]');}
    get platNomorInput() {return $('//android.widget.EditText[@hint="Masukkan nomor polisi"]');}
    get namaPemilikInput() {return $('//android.widget.ImageView[@hint="Masukkan nama STNK"]');}
    get tanggalExpiredStnkInput() {return $('//android.widget.EditText[@hint="Pilih tanggal berakhir STNK"]');}
    get odometerInput() {return $('//android.widget.EditText[@hint="Masukkan odometer\nKilometer"]');}
    get warnaInput() {return $('//android.widget.EditText[@hint="Masukkan warna kendaraan"]');}
    get jumlahPinjamanInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(2)');}
    
    //Informasi Data Nasabah
    get alamatInput() {return $('//android.widget.EditText[@hint="Masukkan alamat domisili"]');}
    get kepemilikanKendaraanInput() {return $(`~Pilih kepemilikan`);} //Milik Sendiri
    get buktiKepemilikankendaraanInput() {return $(`~Pilih bukti kepemilikan`);} //Sertifikat Hak Milik (SHM)
    get kondisiRumahInput() {return $('//android.widget.EditText[@hint="Masukkan kondisi rumah"]');}
    get kondisiLingkunganInput() {return $('//android.widget.EditText[@hint="Masukkan kondisi lingkungan"]');}
    get aksesJalanInput() {return $('//android.widget.EditText[@hint="Masukkan akses jalan"]');}
    get lamaTinggalInput() {return $('//android.widget.EditText[@hint="Masukkan lama tinggal\nTahun"]');}
    get garasiInput() {return $(`~Pilih status garasi`);} //Ada
    
    //Informasi Usaha
    get namaUsahaInput() {return $('//android.widget.EditText[@hint="Masukkan nama usaha"]');}
    get alamatUsahaInput() {return $('//android.widget.EditText[@hint="Masukkan alamat usaha"]');}
    get jabatanInput() {return $('//android.widget.EditText[@hint="Masukkan jabatan"]');}
    get teleponUsahaInput() {return $('//android.widget.EditText[@hint="Masukkan nomor telepon usaha"]');}
    get statusUsahaInput() {return $('//android.widget.EditText[@hint="Masukkan status usaha"]');}
    get lamaUsahaInput() {return $('//android.widget.EditText[@hint="Masukkan lama usaha\nTahun"]');}
    get minimalOmsetInput() {return $('//android.widget.EditText[@hint="Rp\nMinimal"]');}
    get maksimalOmsetInput() {return $('//android.widget.EditText[@hint="Rp\nMaksimal"]');}
    get izinUsahaInput() {return $(`~Pilih izin usaha`);} //NIB
    get nomorUsahaInput() {return $('//android.widget.EditText[@hint="Masukkan nomor NIB/SKU"]');}
    get bidangUsahaInput() {return $('//android.widget.EditText[@hint="Masukkan bidang usaha"]');}
    get minimalKaryawanInput() {return $('//android.widget.EditText[@hint="Minimal"]');}
    get maksimalKaryawanInput() {return $('//android.widget.EditText[@hint="Maksimal"]');}

    // Pernyataan
    get pernyataanTitle() {return $(`~PERNYATAAN\nSeluruh data yang dituliskan dan terlampir dalam pengajuan ini adalah benar`);}
    get pernyataan1Input() {return $('android=new UiSelector().className("android.widget.CheckBox").instance(0)');}
    get pernyataan2Input() {return $('android=new UiSelector().className("android.widget.CheckBox").instance(1)');}

    // Button
    get processButton() {return $(`~Proses`);}

    async scrollToElement(element, timeout = 5000) {
        const scrollableParent = $('android=new UiSelector().scrollable(true)');
        let isDisplayed = await element.isDisplayed();
        while (!isDisplayed) {
            await browser.swipe({ scrollableElement: scrollableParent, direction: 'up', percent: 0.6 });
            isDisplayed = await element.isDisplayed();
        }
        await element.waitForDisplayed({ timeout });
    }

    /**
     * 
     * @param {WebdriverIO.Element} element 
     * @param {string} value 
     */
    async fillInput(element, value) {
        await this.scrollToElement(element);
        await element.click();
        await element.setValue(value);
        await driver.hideKeyboard();

        // Validasi hasil input muncul dengan benar
        const actualValue = await element.getText();
        expect(actualValue).toEqual(value);
    }

    /**
     * 
     * @param {WebdriverIO.Element} dropdownElement 
     * @param {string} optionText 
     */
    async selectDropdown(dropdownElement, optionText) {
        await this.scrollToElement(dropdownElement);
        await dropdownElement.click();
        const option = await $(`~${optionText}`);
        await option.click();

        // Validasi dropdown terpilih
        const selectedValue = await dropdownElement.getText();
        expect(selectedValue).toEqual(optionText);
    }

    async openGadaiBPKBPage() {
        await driver.$('android=new UiScrollable(new UiSelector().scrollable(true))' +
        `.scrollIntoView(new UiSelector().description("Gadai BPKB\nMobil Fidusia\nDetail"))`);

        await this.gadaiButton.waitForDisplayed({timeout: 20000});
        await this.gadaiButton.waitForEnabled({timeout: 20000});
        await expect(this.gadaiButton).toBeDisplayed();

        // open Gadai BPKB page
        await this.gadaiButton.click();
    }

    /**
     * 
     * @param {string} merk 
     * @param {string} jenis 
     * @param {string} tahun 
     * @param {string} nopol 
     * @param {string} nama 
     * @param {string} expiredStnk 
     * @param {string} odometer 
     * @param {string} warna 
     * @param {string} jumlah 
     */
    async fillInformasiKendaraan(merk,jenis,tahun,nopol,nama,expiredStnk,odometer,warna,jumlah) {
        await this.fillInput(this.merkInput, merk);
        await this.fillInput(this.jenisKendaraanInput, jenis);
        await this.fillInput(this.tahunKendaraanInput, tahun);
        await this.fillInput(this.platNomorInput, nopol);
        await this.fillInput(this.namaPemilikInput, nama);
        //await this.fillInput(this.tanggalExpiredStnkInput, expiredStnk);
        //await this.fillInput(this.odometerInput, odometer);
        await this.fillInput(this.warnaInput, warna);

        const inputs = await $$('android.widget.EditText');
        const jumlahInput = inputs[inputs.length - 2];
        await this.fillInput(jumlahInput, jumlah);
    }

    /**
     * 
     * @param {string} alamat 
     * @param {string} kondisiRumah 
     * @param {string} kondisiLingkungan 
     * @param {string} aksesJalan 
     * @param {string} lamaTinggal 
     */
    async fillInformasiDataNasabah(alamat, kondisiRumah, kondisiLingkungan, aksesJalan, lamaTinggal) {
        await this.fillInput(this.alamatInput, alamat);
        await this.selectDropdown(this.kepemilikanKendaraanInput, "Milik Sendiri");
        await this.fillInput(this.kondisiRumahInput, kondisiRumah);
        await this.selectDropdown(this.buktiKepemilikankendaraanInput, "Sertifikat Hak Milik (SHM)");
        await this.fillInput(this.kondisiLingkunganInput, kondisiLingkungan);
        await this.fillInput(this.aksesJalanInput, aksesJalan);
        await this.fillInput(this.lamaTinggalInput, lamaTinggal);
        await this.selectDropdown(this.garasiInput, 'Ada');
        
    }

    /**
     * 
     * @param {string} namaUsaha 
     * @param {string} alamatUsaha 
     * @param {string} jabatan 
     * @param {string} teleponUsaha 
     * @param {string} statusUsaha 
     * @param {string} lamaUsaha 
     * @param {string} minimalOmset 
     * @param {string} maksimalOmset 
     * @param {string} nomorIzinUsaha 
     * @param {string} bidangUsaha 
     * @param {string} minimalKaryawan 
     * @param {string} maksimalKaryawan 
     */
    async fillInformasiUsaha(namaUsaha, alamatUsaha, jabatan, teleponUsaha, statusUsaha, lamaUsaha, minimalOmset, maksimalOmset, nomorIzinUsaha, bidangUsaha, minimalKaryawan, maksimalKaryawan) {
        await this.fillInput(this.namaUsahaInput, namaUsaha);
        await this.fillInput(this.alamatUsahaInput, alamatUsaha);
        await this.fillInput(this.jabatanInput, jabatan);
        await this.fillInput(this.teleponUsahaInput, teleponUsaha);
        await this.fillInput(this.statusUsahaInput, statusUsaha);
        await this.fillInput(this.lamaUsahaInput, lamaUsaha);
        await this.fillInput(this.minimalOmsetInput, minimalOmset);
        await this.fillInput(this.maksimalOmsetInput, maksimalOmset);
        await this.selectDropdown(this.izinUsahaInput, 'NIB');
        await this.fillInput(this.nomorUsahaInput, nomorIzinUsaha);
        await this.fillInput(this.bidangUsahaInput, bidangUsaha);
        
        const inputs = await $$('android.widget.EditText');
        const minimalKaryawanInput = inputs[inputs.length - 2];
        await this.fillInput(minimalKaryawanInput, minimalKaryawan);

        const maksimalKaryawanInput = inputs[inputs.length - 1];
        await this.fillInput(maksimalKaryawanInput, maksimalKaryawan);
    }

    async checkPernyataanAndProses() {
        await this.scrollToElement(this.pernyataanTitle);
        await this.pernyataan1Input.waitForDisplayed({ timeout: 5000 });
        await this.pernyataan1Input.click();
        await this.pernyataan2Input.waitForDisplayed({ timeout: 5000 });
        await this.pernyataan2Input.click();
        await this.processButton.waitForDisplayed({ timeout: 5000 });
        await expect(this.processButton).toBeDisplayed();
        await this.processButton.click();
    }
}

export default new GadaiBPKBPage();