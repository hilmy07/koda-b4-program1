const { getCart, addHistory } = require("./cart");

function formatRupiah(number) {
  return "Rp. " + number.toLocaleString("id-ID") + ",-";
}

async function order(ask, dashBoard) {
  const menu = {
    1: { name: "Buku tulis", price: 5000 },
    2: { name: "Pensil", price: 3000 },
    3: { name: "Ballpoint", price: 4000 },
    4: { name: "Penghapus", price: 10000 },
    5: { name: "Rautan", price: 5000 },
    6: { name: "Buku gambar", price: 10000 },
    7: { name: "Spidol", price: 5000 },
    8: { name: "Kertas A4", price: 40000 },
    9: { name: "Kertas F4", price: 45000 },
    10: { name: "Kertas Karton", price: 3000 },
  };

  const cart = getCart();
  const cartIndex = cart.length;

  console.log("\n=== Keranjang Pesanan ===");
  if (cartIndex === 0) {
    console.log("Belum ada pesanan.");
    dashBoard();
  } else {
    let grandTotal = 0;
    cart.forEach((c, idx) => {
      const m = menu[c.item];
      const subTotal = m.price * c.qty;
      grandTotal += subTotal;
      console.log(
        `${idx + 1}. ${m.name} x ${c.qty} = ${formatRupiah(subTotal)}`
      );
    });

    console.log("---------------------------------");
    console.log(`Total semua pesanan: ${formatRupiah(grandTotal)}`);

    const answer = await ask("Apakah Anda ingin checkout? (y/n): ");
    if (answer.toLowerCase() === "y") {
      addHistory();

      console.log("Terima kasih telah berbelanja di Roti'o Bakery!");
      cart.length = 0;
      dashBoard();
    } else {
      console.log("Pesanan belum di-checkout.");
      dashBoard();
    }
  }
}

module.exports = { order };
