const { getHistory } = require("./cart");

function formatRupiah(number) {
  return "Rp. " + number.toLocaleString("id-ID") + ",-";
}

function history() {
  const { historyCart, historyCount, historyIndex } = getHistory();
  const menu = {
    1: { name: "Buku tulis", price: 10000 },
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

  console.log("\n=== Riwayat Pesanan ===");
  if (historyIndex === 0) {
    console.log("Belum ada pesanan.");
    // dashBoard();
  } else {
    for (let h = 0; h < historyIndex; h++) {
      const invoiceNumber = String(h + 1).padStart(4, "0");
      console.log(`\n🧾 Invoice: #INV${invoiceNumber}`);

      const now = new Date();
      const tanggalDanJam = now.toLocaleString("id-ID", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      console.log(`🕓 Date: ${tanggalDanJam}`);
      // console.log(`\nCheckout ke-${h + 1}:`);
      let grandTotal = 0;
      const keranjang = historyCart[h];
      const jumlahItem = historyCount[h];

      for (let i = 0; i < jumlahItem; i++) {
        const c = keranjang[i];
        const m = menu[c.item];
        const subTotal = m.price * c.qty;
        grandTotal += subTotal;
        console.log(
          `  ${i + 1}. ${m.name} x ${c.qty} = ${formatRupiah(subTotal)}`
        );
      }

      console.log(`  Total Checkout : ${formatRupiah(grandTotal)}`);
    }
  }
}

module.exports = { history };
