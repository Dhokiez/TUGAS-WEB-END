const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");
const header = document.querySelector("header");

// Fungsi untuk toggle menu dan mengganti ikon saat diklik
menuIcon.addEventListener("click", function () {
    if (menuList.style.display === "none" || menuList.style.display === "") {
        // Tampilkan menu
        menuList.style.display = "block"; 
        
        // Ganti ikon hamburger dengan ikon X
        menuIcon.innerHTML = '<i class="ph ph-x icon"></i>'; 
    } else {
        // Sembunyikan menu
        menuList.style.display = "none"; 
        
        // Kembalikan ikon menjadi hamburger
        menuIcon.innerHTML = '<i class="ph ph-list icon"></i>';
    }
});

// Fungsi untuk menyesuaikan tampilan menu saat ukuran layar berubah
window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        // Tampilkan menu di layar besar
        menuList.style.display = "block"; 
        
        // Ganti ikon menjadi hamburger jika menu ditutup
        if (menuList.style.display === "none") {
            menuIcon.innerHTML = '<i class="ph ph-list icon"></i>';
        }
    } else {
        // Sembunyikan menu di layar kecil
        menuList.style.display = "none"; 
        
        // Ganti ikon menjadi hamburger saat menu disembunyikan
        menuIcon.innerHTML = '<i class="ph ph-list icon"></i>';
    }
});

// Inisialisasi saat halaman pertama kali dimuat
window.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 768) {
        // Sembunyikan menu di mobile saat awal load
        menuList.style.display = "none"; 
        // Ganti ikon menjadi hamburger saat pertama kali dimuat
        menuIcon.innerHTML = '<i class="ph ph-list icon"></i>';
    } else {
        // Tampilkan menu di desktop saat awal load
        menuList.style.display = "block"; 
    }
});

// Menyembunyikan header saat scroll
window.addEventListener("scroll", function () {
  requestAnimationFrame(function () {
    const scrollTop = window.scrollY;

    if (scrollTop > 0) {
      header.style.opacity = "0";
      header.style.pointerEvents = "none";
    } else {
      header.style.opacity = "1";
      header.style.pointerEvents = "auto";
    }
  });
});


// Fungsi untuk menampilkan menu saat ikon diklik