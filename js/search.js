document.addEventListener("DOMContentLoaded", () => {
  // tombol Back
  document.getElementById("backBtn").addEventListener("click", () => {
    window.history.back();
  });

  // tombol Clear (kembali ke home)
  document.getElementById("clearBtn").addEventListener("click", () => {
    window.location.href = "home.html";
  });

  // tombol Info Selengkapnya
  document.getElementById("infoBtn").addEventListener("click", () => {
    window.location.href = "tommykurniawan.html";
  });

  // ======= isi keyword dan jumlah hasil secara dinamis =======
  const params = new URLSearchParams(window.location.search);
  const keyword = params.get("q") || "";
  if (keyword) {
    document.getElementById("keyword").textContent = keyword;
    // misal jumlah hasil kita set statis 21
    document.getElementById("result-count").textContent =
      "Menampilkan 21 hasil pencarian";
  }

  // untuk highlight kata tommy kurniawan
  const relatedTexts = document.querySelectorAll(".related-section .related-link");

  relatedTexts.forEach(el => {
    el.innerHTML = el.innerHTML.replace(
      /Tommy Kurniawan/gi,
      '<span class="highlight-name">Tommy Kurniawan</span>'
    );
  });
});