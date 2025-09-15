const { addToCart } = require("./cart");

async function viewMenu(ask, dashBoard) {
  console.log("\n =============== Star Stationery ================= ");
  console.log("1. Buku tulis                 : Rp. 5.000,-");
  console.log("2. Pensil                     : Rp. 3.000,-");
  console.log("3. Ballpoint                  : Rp. 4.000,-");
  console.log("4. Penghapus                  : Rp. 10.000,-");
  console.log("5. Rautan                     : Rp. 5.000,-");
  console.log("6. Buku gambar                : Rp. 10.000,-");
  console.log("7. Spidol                     : Rp. 5.000,-");
  console.log("8. Kertas A4                  : Rp. 40.000,-");
  console.log("9. Kertas F4                  : Rp. 45.000,-");
  console.log("10. Kertas Karton             : Rp. 3.000,-");
  console.log("==============================================");
  console.log("99 kembali ke dashboard.");

  let input = parseInt(
    await ask("\n\nMasukkan nomor menu (1-10): | kembali ke dashboard 99 : "),
    10
  );

  if (input === 99) {
    return dashBoard();
  }

  let qty = parseInt(await ask("Masukkan jumlah pesanan: "), 10);

  if (isNaN(input) || input < 1 || input > 10) {
    console.log("Nomor menu tidak valid!");
  } else if (isNaN(qty) || qty < 1) {
    console.log("Jumlah pesanan harus lebih dari 0!");
  } else {
    addToCart(input, qty);
    console.log(
      `✅ Pesanan ${qty}x menu nomor ${input} berhasil ditambahkan ke keranjang!`
    );
  }
  dashBoard();
}

module.exports = { viewMenu };
