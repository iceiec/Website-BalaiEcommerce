// modal.js (copied into public/)

document.addEventListener('DOMContentLoaded', () => {
    const modalTriggers = document.querySelectorAll('[data-modal-target]');
    const modalSwitches = document.querySelectorAll('[data-modal-switch]');
    const backdrop = document.getElementById('modal-backdrop');

    const openModal = (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal && backdrop) {
            document.querySelectorAll('.modal.active').forEach(activeModal => {
                activeModal.classList.remove('active');
            });
            backdrop.classList.add('active');
            modal.classList.add('active');
            document.body.classList.add('body-no-scroll');
        }
    };

    const closeModal = () => {
        if (backdrop) {
            backdrop.classList.remove('active');
            document.querySelectorAll('.modal.active').forEach(modal => {
                modal.classList.remove('active');
            });
            document.body.classList.remove('body-no-scroll');
        }
    };

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (event) => {
            event.preventDefault();
            const modalId = trigger.getAttribute('data-modal-target');
            openModal(modalId);
        });
    });

    modalSwitches.forEach(switcher => {
        switcher.addEventListener('click', (event) => {
            event.preventDefault();
            const modalId = switcher.getAttribute('data-modal-switch');
            openModal(modalId);
        });
    });

    if (backdrop) {
        backdrop.addEventListener('click', (event) => {
            if (event.target === backdrop) {
                closeModal();
            }
        });

        backdrop.querySelectorAll('.close-modal-btn').forEach(closeBtn => {
            closeBtn.addEventListener('click', closeModal);
        });
    }
});
