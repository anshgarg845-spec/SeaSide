function scrollToBooking() {
    const bookingSection = document.getElementById('booking-form');
    bookingSection.scrollIntoView({ behavior: 'smooth' });
}

// Visual feedback for button click
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const submitBtn = document.querySelector('.submit-btn');

    form.addEventListener('submit', () => {
        submitBtn.innerHTML = "Sending...";
        submitBtn.style.opacity = "0.7";
    });
});