document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('meetingForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const topic = document.getElementById('topic').value.trim();
        const duration = document.getElementById('duration').value.trim();

        if (name === '' || topic === '' || duration === '') {
            alert('Please fill in all fields.');
            return;
        }

        if (isNaN(duration) || duration <= 0) {
            alert('Duration must be a positive number.');
            return;
        }

        // If all validations pass, submit the form
        submitForm(name, topic, duration);
    });

    function submitForm(name, topic, duration) {
        // You can implement form submission logic here
        console.log('Name:', name);
        console.log('Topic:', topic);
        console.log('Duration:', duration);

        // Clear form fields after submission
        form.reset();
    }
});
