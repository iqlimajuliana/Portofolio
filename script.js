document.addEventListener("DOMContentLoaded", () => {
    
    // 1. SCROLL REVEAL 
    const revealElements = document.querySelectorAll('.reveal');
    window.addEventListener('scroll', () => {
        revealElements.forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
                el.classList.add('active');
            }
        });
    });

    // 2. VALIDASI FORM 
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", (e) => {
            let nama = document.getElementById("name").value;
            let pesan = document.getElementById("message").value;
            let errorPlaceholder = document.getElementById("error-msg");

            // Logika If/Else 
            if (nama.length < 3 || pesan.length < 5) {
                errorPlaceholder.innerHTML = "Input tidak valid! (Nama min 3, Pesan min 5)";
                e.preventDefault(); 
            } else {
                errorPlaceholder.style.color = "#c5a059";
                errorPlaceholder.innerHTML = "Pesan berhasil dikirim!";
               
            }
        });
    }
});