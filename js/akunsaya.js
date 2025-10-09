// buat ganti tab/ saat tombol navigasi di klik
const tabs = document.querySelectorAll(".tab");
const forms = {
    password: document.getElementById("form-password"),
    pin: document.getElementById("form-pin"),
};

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        //reset tab yang aktif
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        //sembunyikan/ tampilkan forms
        Object.keys(forms).forEach(key => forms[key].classList.add("hidden"));
        forms[tab.dataset.tab].classList.remove("hidden");
    });
});

// buat tombol mata/ lihat pass
document.querySelectorAll(".eye").forEach(eye => {
    eye.addEventListener("click", () => {
        const input = eye.previousElementSibling;
        if (input.type === "password") {
            input.type = "text";
            eye.classList.remove("fa-eye");
            eye.classList.add("fa-eye-slash");
        } else {
            input.type = "password";
            eye.classList.remove("fa-eye-slash");
            eye.classList.add("fa-eye");
        }
    });
});

//buat agar yang pin hanya angka sanja yang diterim
document.querySelectorAll('#form-pin input').forEach(input => {
    input.addEventListener('input', () => {
        input.value = input.value.replace(/\D/g, '');
    });
});

//validasi kesamaan untuk pin
document.getElementById("save-pin").addEventListener("click", (e) => {
    e.preventDefault(); 

    const oldPin = document.getElementById("old-pin").value;
    const newPin = document.getElementById("new-pin").value;
    const confirmPin = document.getElementById("confirm-pin").value;

    if (!oldPin || !newPin || !confirmPin) {
        alert("Tolong isi semuanya!")
        return;
    }

    if (newPin !== confirmPin) {
        alert("Pin baru dan konfirmasi berbeda");
        return;
    }

    alert("Pin berhasil diubah");
    location.reload();
})

//validasi kesamaan password
document.getElementById("save").addEventListener("click", (e) => {
    e.preventDefault(); 

    const old = document.getElementById("old").value;
    const newPass = document.getElementById("new").value;
    const confirm = document.getElementById("confirm").value;

    if (!old || !newPass || !confirm) {
        alert("Tolong isi semuanya!")
        return;
    }

    if (newPass !== confirm) {
        alert("Password baru dan konfirmasi berbeda");
        return;
    }

    alert("Password berhasil diubah");
    location.reload();
})
