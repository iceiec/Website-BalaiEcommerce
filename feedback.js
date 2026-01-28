// Balai Alegria - Feedback Page Script

document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star-rating .star');
    const ratingValueInput = document.getElementById('rating-value');

    if (stars.length > 0 && ratingValueInput) {
        stars.forEach(star => {
            star.addEventListener('click', function() {
                const value = this.getAttribute('data-value');
                ratingValueInput.value = value;

                // Remove selected class from all stars
                stars.forEach(s => s.classList.remove('selected'));
                // Add selected class to the clicked star and all stars before it
                this.classList.add('selected');
                let previousSibling = this.previousElementSibling;
                while(previousSibling) {
                    previousSibling.classList.add('selected');
                    previousSibling = previousSibling.previousElementSibling;
                }
            });
        });
    }
});