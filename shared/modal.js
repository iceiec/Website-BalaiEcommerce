// Balai Alegria - Modal Script

document.addEventListener('DOMContentLoaded', () => {
    const modalTriggers = document.querySelectorAll('[data-modal-target]');
    const modalSwitches = document.querySelectorAll('[data-modal-switch]');
    const backdrop = document.getElementById('modal-backdrop');

    // Function to open a modal
    const openModal = (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal && backdrop) {
            // Hide any currently active modals
            document.querySelectorAll('.modal.active').forEach(activeModal => {
                activeModal.classList.remove('active');
            });
            // Show the new modal and backdrop
            backdrop.classList.add('active');
            modal.classList.add('active');
            document.body.classList.add('body-no-scroll');
        }
    };

    // Function to close all modals
    const closeModal = () => {
        if (backdrop) {
            backdrop.classList.remove('active');
            document.querySelectorAll('.modal.active').forEach(modal => {
                modal.classList.remove('active');
            });
            document.body.classList.remove('body-no-scroll');
        }
    };

    // Event listeners for modal triggers (buttons in the navbar, etc.)
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (event) => {
            event.preventDefault();
            const modalId = trigger.getAttribute('data-modal-target');
            openModal(modalId);
        });
    });

    // Event listeners for modal switches (links inside the modals)
    modalSwitches.forEach(switcher => {
        switcher.addEventListener('click', (event) => {
            event.preventDefault();
            const modalId = switcher.getAttribute('data-modal-switch');
            openModal(modalId);
        });
    });

    // Event listener for the backdrop (to close on click outside)
    if (backdrop) {
        backdrop.addEventListener('click', (event) => {
            if (event.target === backdrop) {
                closeModal();
            }
        });

        // Add event listeners for all close buttons within the backdrop
        backdrop.querySelectorAll('.close-modal-btn').forEach(closeBtn => {
            closeBtn.addEventListener('click', closeModal);
        });
    }
});