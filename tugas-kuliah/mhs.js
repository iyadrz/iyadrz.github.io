var tabel = document.getElementById('tabel'),
            nama = document.getElementById('nama'),
            nim = document.getElementById('nim'),
            prodi = document.getElementById('prodi'),
            email = document.getElementById('email'),
            btnDaftar = document.getElementById('btnDaftar'),
            form = document.getElementById('frmUtama'),
            pesan = document.getElementById('pesan'),
            db;         

class DataMahasiswa{
    get name() {
        return this._nama
    }
    set name(newValue) {
        this._nama = newValue
    }
    get nim() {
        return this._nim
    }
    set nim(newValue) {
        this._nim = newValue
    }
    get prodi() {
        return this.prodi
    }
    set prodi(newValue) {
        this.prodi = newValue
    }
    get email() {
        return this._email
    }
    set email(newValue) {
        this._email = newValue
    }

    constructor(nama, nim, prodi, email){
        this._nama = nama;
        this._nim = nim;
        this._prodi = prodi;
        this._email = email;
    }
}

function cetakPesanHandler(msg) {
    return function (e) {
        pesan.innerHTML += msg + '<br>';
    }
}

function buatTransaksi() {
    var transaction = db.transaction(['mahasiswa'], 'readwrite');
    transaction.onerror = kesalahanHandler;
    transaction.oncomplete = cetakPesanHandler('Transaksi baru saja diselesaikan.');
    return transaction;
}

function tambahKeDatabase(mahasiswa) {
    var objectstore = buatTransaksi().objectStore('mahasiswa');
    var request = objectstore.add(mahasiswa);
    request.onerror = kesalahanHandler;
    request.onsuccess = cetakPesanHandler('Mahasiswa [' + mahasiswa.nim + '] telah ditambahkan ke database lokal.');
}

function hapusDariDatabase(nim) {
    var objectstore = buatTransaksi().objectStore('mahasiswa');
    var request = objectstore.delete(nim);
    request.onerror = kesalahanHandler;
    request.onsuccess = cetakPesanHandler('Mahasiswa [' + nim + '] berhasil dihapus dari database lokal.');
}

function tampilkanData(e) {
        let dataMhs = new DataMahasiswa(nama.value, nim.value, prodi.value, email.value)
        // Periksa apakah NIM sudah ada
        if (tabel.rows.namedItem(dataMhs._nim)) {
        pesan.textContent = 'Error: Nim sudah terdaftar!';
        e.preventDefault();
        return;
        }
 
        // Membuat baris baru
        var baris = tabel.insertRow();
        baris.id = dataMhs._nim;
        baris.insertCell().appendChild(document.createTextNode(dataMhs._nama));
        baris.insertCell().appendChild(document.createTextNode(dataMhs._nim));
        baris.insertCell().appendChild(document.createTextNode(dataMhs._prodi));
        baris.insertCell().appendChild(document.createTextNode(dataMhs._email));
 
        // Membuat tombol hapus untuk setiap baris
        var btnHapus = document.createElement('input');
        btnHapus.type = 'button';
        btnHapus.value = 'Hapus';
        btnHapus.id = dataMhs._nim;            
        baris.insertCell().appendChild(btnHapus);
 
        // Tambah ke database
        tambahKeDatabase({
            nama: dataMhs._nama,
            nim: dataMhs._nim,
            prodi: dataMhs._prodi,
            email: dataMhs._email
        });
        e.preventDefault();
}               
 
function hapusData(e) {
    if (e.target.type=='button') {                
        tabel.deleteRow(tabel.rows.namedItem(e.target.id).sectionRowIndex);
        hapusDariDatabase(e.target.id);
    }
}
 
form.addEventListener('submit', tampilkanData, false);                  
tabel.addEventListener('click', hapusData, true);

function kesalahanHandler(e) {
    pesan.innerHTML += 'Kesalahan Database: ' + e.target.errorCode + '<br>';      
}
 
function buatDatabase() {
    var request = window.indexedDB.open('latihan', 1);
    request.onerror = kesalahanHandler;
    request.onupgradeneeded = function(e) {             
        var db = e.target.result;
        db.onerror = kesalahanHandler;                          
        var objectstore = db.createObjectStore('mahasiswa', { keyPath: 'nim' });
        pesan.innerHTML += 'Object store mahasiswa berhasil dibuat.<br>';
    }
    request.onsuccess = function(e) {           
        db = e.target.result;
        db.onerror = kesalahanHandler;                          
        pesan.innerHTML += 'Berhasil melakukan koneksi ke database!<br>';
        bacaDariDatabase();               
    }
}

function bacaDariDatabase() {
    var objectstore = buatTransaksi().objectStore('mahasiswa');
    objectstore.openCursor().onsuccess = function(e) {
        var result = e.target.result;
        if (result) {
            pesan.innerHTML += 'Membaca mahasiswa [' + result.value.nim + '] dari database.<br>';
            var baris = tabel.insertRow();                  
            baris.id = result.value.nim;
            baris.insertCell().appendChild(document.createTextNode(result.value.nama));
            baris.insertCell().appendChild(document.createTextNode(result.value.nim));
            baris.insertCell().appendChild(document.createTextNode(result.value.prodi));
            baris.insertCell().appendChild(document.createTextNode(result.value.email));
            var btnHapus = document.createElement('input');
            btnHapus.type = 'button';
            btnHapus.value = 'Hapus';
            btnHapus.id = result.value.nim;         
            baris.insertCell().appendChild(btnHapus);
            result.continue();
        }
    }   
}

function resetForm(){
    document.getElementById('nama') = "";
    document.getElementById('nim') = "";
    document.getElementById('prodi') = "";
    document.getElementById('email') = "";
}

form.addEventListener('reset', resetForm, false);    
buatDatabase();