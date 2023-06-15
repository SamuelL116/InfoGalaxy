document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('feedback-form');
    const feedbackInput = document.getElementById('feedback-input');
    const detailsInput = document.getElementById('details-input');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const feedback = feedbackInput.value;
        const category = document.querySelector('input[name="category"]:checked').value;
        const details = detailsInput.value;
        const data = { feedback, category, details };
        fetch('/submit-feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert('Feedback submitted successfully!');
            form.reset();
        })
        .catch(error => {
            alert('Error submitting feedback. Please try again later.');
        });
    });
});

const sendingAnimation = document.getElementById('sending-animation');
const sentAnimation = document.getElementById('sent-animation');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    sendingAnimation.style.display = 'block';
    setTimeout(() => {
        sentAnimation.style.display = 'block';
        setTimeout(() => {
            form.reset();
            sendingAnimation.style.display = 'none';
            sentAnimation.style.display = 'none';
        }, 3000);
    }, 2000);
});

sentAnimation.addEventListener('click', () => {
    form.reset();
    sendingAnimation.style.display = 'none';
    sentAnimation.style.display = 'none';
});