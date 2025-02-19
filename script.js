
const kedip = document.getElementById("kedip");

setInterval(() => {
  kedip.style.visibility = kedip.style.visibility === "hidden" ? "visible" : "hidden";
}, 500);


const produk = [
  { nama: "Produk 1", harga: 100000, deskripsi: "Ini adalah produk 1." },
  { nama: "Produk 2", harga: 200000, deskripsi: "Ini adalah produk 2." },
  { nama: "Produk 3", harga: 300000, deskripsi: "Ini adalah produk 3." }
];


const daftarProduk = document.getElementById("daftar-produk");
produk.forEach((p) => {
  const li = document.createElement("li");
  li.innerHTML = `
    <h2>${p.nama}</h2>
    <p>Harga: Rp ${p.harga}</p>
    <p>${p.deskripsi}</p>
  `;
  daftarProduk.appendChild(li);
});


const beliSekarang = document.getElementById("beli-sekarang");
beliSekarang.addEventListener("click", () => {

  alert("✔Terimakasih Sudah Berbelanja ! 😉💕");
});


const kirimPesan = document.getElementById("kirim-pesan");
kirimPesan.addEventListener("click", () => {
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;
  
  alert(`Terima Kasih, ${nama}! Atas Pesanan Anda 😊👌.`);
});
