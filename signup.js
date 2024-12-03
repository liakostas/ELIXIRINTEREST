document.getElementById('waitlistForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('Form submitted');

    // Get form data
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email')
    };
    console.log('Sending data:', data);

    try {
        // Send data to your endpoint
        const response = await fetch('https://logtodatabase-rgzyvy3rca-uc.a.run.app/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        console.log('Response status:', response.status);

        if (response.ok) {
            // If successful, redirect to thank you page
            window.location.href = 'thankyou.html';
        } else {
            console.error('Server error:', response.status);
            alert('Something went wrong. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error submitting form. Please try again.');
    }
}); 
