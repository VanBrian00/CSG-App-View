document.addEventListener("DOMContentLoaded", () => {
    // Tombol back
    document.getElementById("backBtn").addEventListener("click", () => {
        window.history.back();
    });

    // Tab navigation
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".content");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const targetId = tab.dataset.tab;

            // Hapus kelas 'active' dari semua tab dan konten
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            // Tambahkan kelas 'active' pada tab dan konten yang diklik
            tab.classList.add("active");
            document.getElementById(targetId).classList.add("active");
        });
    });

    // Logika untuk input PIN
    const pinInputs = document.querySelectorAll('.pin-box');
    const pinSection = document.getElementById('pinSection');
    const komitmenContent = document.getElementById('komitmenContent');

    pinInputs.forEach((box, index) => {
        box.addEventListener('input', () => {
            //cek angka 0-9
            if (!/^[0-9]$/.test(box.value)) {
                box.value = '';
                return;
            }

            if (box.value.length === box.maxLength) {
                if (index + 1 < pinInputs.length) {
                    pinInputs[index + 1].focus();
                } else {
                    // Jika semua PIN sudah terisi
                    let pin = '';
                    pinInputs.forEach(p => pin += p.value);

                    if (pin === "1234") { // PIN contoh
                        pinSection.style.display = "none";
                        komitmenContent.style.display = "block";
                        renderCharts(); // panggil chart
                    } else {
                        alert("PIN salah!");
                        pinInputs.forEach(p => p.value = "");
                        pinInputs[0].focus();
                    }
                }
            }
        });

        box.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && box.value === '' && index > 0) {
                //mundurin ke kotak sebelumnya
                pinInputs[index - 1].focus();
                // hapus input di kotak sebelumnya
                pinInputs[index - 1].value = '';
            }
        });
    });
});