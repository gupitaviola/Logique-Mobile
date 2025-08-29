import {$, expect} from '@wdio/globals';

class GadaiBPKBPage {
    get gadaiButton() {return $('~Gadai BPKB\nMobil Fidusia\nDetail');}
    //Informasi Kendaraan
    get merkInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    get jenisKendaraanInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(1)');}
    get tahunKendaraanInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(2)');}
    get platNomorInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(3)');}
    get namaPemilikInput() {return $('android=new UiSelector().className("android.widget.ImageView").instance(1)');}
    get tanggalExpiredStnkInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    get odometerInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    get warnaInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    get jumlahPinjamanInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    
    //Informasi Data Nasabah
    get alamatInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    get kepemilikanKendaraanInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    get buktiKepemilikankendaraanInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    get kondisiRumahInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    get kondisiLingkunganInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    get aksesJalanInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    get lamaTinggalInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    get garasiInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    
    //Informasi Usaha
    get namaUsahaInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    get alamatUsahaInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    get jabatanInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    get teleponUsahaInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    get statusUsahaInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    get lamaUsahaInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    get minimalOmsetInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    get maksimalOmsetInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    get izinUsahaInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    get bidangUsahaInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    get minimalKaryawanInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    get maksimalKaryawanInput() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    get pernyataan1Input() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    get pernyataan2Input() {return $('android=new UiSelector().className("android.widget.EditText").instance(0)');}
    get processButton() {return $('android=new UiSelector().description("Proses")');}

    async openGadaiBPKBPage() {
        //const gadaiDetailButton = $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Gadai BPKB Mobil Fidusia")');
        await driver.$('android=new UiScrollable(new UiSelector().scrollable(true))' +
        `.scrollIntoView(new UiSelector().description("Gadai BPKB\nMobil Fidusia\nDetail"))`);

        await this.gadaiButton.waitForDisplayed({timeout: 20000});
        await this.gadaiButton.waitForEnabled({timeout: 20000});
        await expect(this.gadaiButton).toBeDisplayed();
        // open Gadai BPKB page
        await this.gadaiButton.click();
    }

    async fillInformasiKendaraan(merk,jenis,tahun,nopol,nama,expiredStnk,odometer,warna,jumlah) {
        await this.merkInput.waitForDisplayed({ timeout: 5000 });
        await this.merkInput.click();
        await this.merkInput.setValue(merk);

        await this.jenisKendaraanInput.waitForDisplayed({ timeout: 5000 });
        await this.jenisKendaraanInput.click();
        await this.jenisKendaraanInput.setValue(jenis);
        
        await this.tahunKendaraanInput.waitForDisplayed({ timeout: 5000 });
        await this.tahunKendaraanInput.click();
        await this.tahunKendaraanInput.setValue(tahun);

        await this.platNomorInput.waitForDisplayed({ timeout: 5000 });
        await this.platNomorInput.click();
        await this.platNomorInput.setValue(nopol);

        await driver.hideKeyboard();
        await this.namaPemilikInput.waitForDisplayed({ timeout: 5000 });
        await this.namaPemilikInput.click();
        await this.namaPemilikInput.setValue(nama);

        await driver.hideKeyboard();
        await driver.$('android=new UiScrollable(new UiSelector().scrollable(true))' +
        `.scrollIntoView(new UiSelector().textContains("Tanggal Berakhir STNK"))`);

        await this.tanggalExpiredStnkInput.waitForDisplayed({ timeout: 5000 });
        await this.tanggalExpiredStnkInput.click();

        await this.tanggalExpiredStnkInput.setValue(expiredStnk);

        
        await this.odometerInput.waitForDisplayed({ timeout: 5000 });
        await this.odometerInput.click();
        await this.odometerInput.setValue(odometer);

        await this.warnaInput.waitForDisplayed({ timeout: 5000 });
        await this.warnaInput.click();
        await this.warnaInput.setValue(warna);

        await this.jumlahPinjamanInput.waitForDisplayed({ timeout: 5000 });
        await this.jumlahPinjamanInput.click();
        await this.jumlahPinjamanInput.setValue(jumlah);
    }

    async fillInformasiDataNasabah() {
        
    }

    async fillInformasiUsaha() {
        
    }
}

export default new GadaiBPKBPage();