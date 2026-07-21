// ===== FULLSCREEN GALERI =====
function openImage(src) {
    document.getElementById('imageModal').style.display = 'flex';
    document.getElementById('modalImage').src = src;
}

function closeImage() {
    document.getElementById('imageModal').style.display = 'none';
}

// Tutup saat klik area hitam
document.getElementById('imageModal').addEventListener('click', function(e) {
    if (e.target.id === 'imageModal') {
        closeImage();
    }
});

// Tutup dengan tombol ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeImage();
    }
});