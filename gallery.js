// Balai Alegria - Gallery Filter Script

document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('#filter-buttons .btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // Check if we are on the gallery page
    if (filterButtons.length === 0 || galleryItems.length === 0) {
        return; // Exit if not on the gallery page
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Set active class on button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Filter the gallery items
            galleryItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === itemCategory) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });
});