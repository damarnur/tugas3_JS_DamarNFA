// Array untuk produk
let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 },
];

function tambahProduk(nama, harga, stok) {
  // Mencari ID terbesar
  let maxId = 0;
  for (let i = 0; i < produkToko.length; i++) {
    if (produkToko[i].id > maxId) {
      maxId = produkToko[i].id;
    }
  }

  // Menambahkan Id baru
  let newId = maxId + 1;

  // membuat objek produk baru
  const produkBaru = {
    id: newId,
    nama: nama,
    harga: harga,
    stok: stok,
  };

  // Menambahkan produk baru ke dalam array produkToko
  produkToko.push(produkBaru);

  console.log(`Produk ${nama} berhasil ditambahkan dengan ID ${newId}`);
  return produkBaru;
}

function tampilkanProduk() {
  console.log("\n=== DAFTAR PRODUK TOKO NURUL FIKRI ===");
  if (produkToko.length === 0) {
    console.log("Tidak ada produk yang tersedia.");
    return;
  }

  for (let i = 0; i < produkToko.length; i++) {
    let produk = produkToko[i];
    console.log(
      `${produk.id}. ${produk.nama} - Harga: ${produk.harga} - Stok: ${produk.stok} pcs`
    );
  }
}

// Menghapus produk
function hapusProduk(id) {
  // Mencari indeks dari produk yang akan dihapus
  let indeks = -1;
  for (let i = 0; i < produkToko.length; i++) {
    if (produkToko[i].id === id) {
      indeks = i;
      break;
    }
  }

  // Jika produk ditemukan = hapus produk
  if (indeks !== -1) {
    const namaProduk = produkToko[indeks].nama;
    produkToko.splice(indeks, 1);
    console.log(`Produk ${namaProduk} dengan ID ${id} berhasil dihapus`);
    return true;
  }
  // Jika produk tidak ditemukan
  else {
    console.log(`Produk dengan ID ${id} tidak ditemukan`);
    return false;
  }
}

console.log("\nDaftar Produk:");
tampilkanProduk();

console.log("\nMenambahkan produk baru:");
tambahProduk("Monitor", 5000000, 3);
tambahProduk("Headset", 1500000, 5);

console.log("\nDaftar Produk setelah ditambahkan produk baru:");
tampilkanProduk();

console.log(`\nMenghapus produk dengan ID 2:`);
hapusProduk(2);

// Daftar produk setelah menghapus produk yang dipilih
tampilkanProduk();
