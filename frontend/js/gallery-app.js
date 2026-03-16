/* ═══════════════════════════════════════════════════════
   AVLOKAN 2024 Gallery App
   Handles dynamic lazy loading of 72 images and Lightbox
   ═══════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('full-gallery-grid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    // Make sure avlokan24Images array exists
    if (typeof avlokan24Images === 'undefined' || !avlokan24Images.length) {
        grid.innerHTML = '<p style="text-align:center;color:var(--text-dim)">No images found.</p>';
        return;
    }

    // Function to render images with lazy loading
    avlokan24Images.forEach((filename) => {
        const imgPath = `assets/AVLOKAN2024/${filename}`;
        
        const img = document.createElement('img');
        // Use standard lazy loading for performance (70+ images)
        img.setAttribute('loading', 'lazy');
        img.src = imgPath;
        img.alt = filename.split('.')[0]; // Clean base name
        
        // Add click listener for Lightbox
        img.addEventListener('click', () => {
             lightboxImg.src = imgPath;
             lightbox.classList.add('active');
        });

        grid.appendChild(img);
    });

    // Lightbox Dismiss Logic
    lightbox.addEventListener('click', () => {
        lightbox.classList.remove('active');
        // brief timeout before clearing src to prevent flash
        setTimeout(() => { lightboxImg.src = ''; }, 300);
    });
});
