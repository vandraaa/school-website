document.addEventListener('DOMContentLoaded', function () {
    // Initial number of visible cards
    let visibleCards;

    // Function to toggle card visibility
    function toggleCardVisibility() {
        const cards = document.querySelectorAll('.card');

        cards.forEach((card, index) => {
            card.style.display = index < visibleCards ? 'block' : 'none';
        });
    }

    // Adjust visible cards based on screen width
    function adjustVisibleCards() {
        if (window.innerWidth >= 768) { // Desktop
            visibleCards = 6;
        } else { // Tablet and Mobile
            visibleCards = 2;
        }

        toggleCardVisibility();
    }

    // Load more button click event
    document.getElementById('loadMoreBtn').addEventListener('click', function () {
        if (window.innerWidth >= 768) { // Desktop
            visibleCards += 4;
        } else { // Tablet and Mobile
            visibleCards += 2;
        }
        // visibleCards += 3; // Increase the number of visible cards
        toggleCardVisibility(); // Toggle card visibility
    });

    // Initial toggle for the first load
    adjustVisibleCards();

    // Listen for window resize to adjust visible cards
    window.addEventListener('resize', adjustVisibleCards);
});
// End Load More



// Blog
 // Fungsi untuk menampilkan konten blog 1
 function showBlog1() {
    hideAllBlogs();
    document.getElementById('blog1').style.display = 'block';
    scrollToTop();
}

// Fungsi untuk menampilkan konten blog 2
function showBlog2() {
    hideAllBlogs();
    document.getElementById('blog2').style.display = 'block';
    scrollToTop();
}

// Fungsi untuk menyembunyikan semua konten blog
function hideAllBlogs() {
    var blogContainers = document.querySelectorAll('.content-blog');
    blogContainers.forEach(function (container) {
        container.style.display = 'none';
    });
}

// Fungsi untuk melakukan scroll ke bagian atas halaman
function scrollToTop() {
    window.scrollTo(0,0);
}