// Mengambil semua elemen dengan kelas .nav-link
var navLinks = document.querySelectorAll('.nav-link');

// Memberikan event listener pada setiap elemen .nav-link
navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    // Menghapus kelas 'active' dari semua elemen .nav-link
    navLinks.forEach(function(link) {
      link.classList.remove('active');
    });

    // Menambahkan kelas 'active' pada elemen yang diklik
    this.classList.add('active');
  });
});
var searchForm = document.getElementById("searchForm");
var searchInput = document.getElementById("searchInput");

// Fungsi untuk mengubah tampilan pencarian sesuai dengan lebar layar
function updateSearchLayout() {
  if (window.matchMedia("(max-width: 600px)").matches) {
    // Tampilan responsif untuk lebar layar <= 600px
    searchForm.style.flexDirection = "column";
    searchInput.style.marginBottom = "10px";
  } else {
    // Tampilan responsif untuk lebar layar > 600px
    searchForm.style.flexDirection = "row";
    searchInput.style.marginBottom = "0";
  }
}

var homeLink = document.getElementById("homeLink");

homeLink.addEventListener("click", function(event) {
  event.preventDefault(); // Mencegah aksi default dari tautan

  // Tambahkan logika atau tindakan lain yang Anda inginkan untuk tautan "Beranda" di sini
  console.log("index.html");

  // Contoh: Ganti warna latar belakang tautan Beranda saat diklik
  homeLink.style.backgroundColor = "";
});


var buyButtons = document.getElementsByClassName("buyButton");

for (var i = 0; i < buyButtons.length; i++) {
  buyButtons[i].addEventListener("click", function() {
    window.location.href = "file:///C:/Users/refli/OneDrive/Desktop/service/index.html";
  });
}

var products = [
  { name: "TELEVISI", price: 100 },
  { name: "HANDPHONE", price: 200 },
  { name: "GENSET", price: 150 },
  // Tambahkan data produk lainnya di sini
];

var searchInput = document.getElementById("searchInput");
var searchButton = document.getElementById("searchButton");
var searchResults = document.getElementById("searchResults");

searchButton.addEventListener("click", function() {
  var searchQuery = searchInput.value.toLowerCase();
  var matchedProducts = searchProducts(searchQuery);
  displaySearchResults(matchedProducts);
});

function searchProducts(query) {
  var matchedProducts = [];

  for (var i = 0; i < products.length; i++) {
    var productName = products[i].name.toLowerCase();

    if (productName.includes(query)) {
      matchedProducts.push(products[i]);
    }
  }

  return matchedProducts;
}

function displaySearchResults(results) {
  searchResults.innerHTML = "";

  if (results.length === 0) {
    searchResults.innerHTML = "Tidak ada hasil yang ditemukan.";
  } else {
    for (var i = 0; i < results.length; i++) {
      var productName = results[i].name;
      var productPrice = results[i].price;

      var resultItem = document.createElement("div");
      resultItem.textContent = productName + " - Rp " + productPrice;
      searchResults.appendChild(resultItem);
    }
  }
}
window.onload = function() {
  var searchButton = document.getElementById('searchButton');
  searchButton.addEventListener('click', function() {
    var searchInput = document.getElementById('searchInput').value;
    // Ganti "halaman-baru.html" dengan URL halaman tujuan
    window.location.href = 'halaman-baru.html?query=' + encodeURIComponent(searchInput);
  });
};

