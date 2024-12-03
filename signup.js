document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('Form submitted'); // Debug log

    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email')
    };
    console.log('Data collected:', data); // Debug log

    try {
        // First, try the Cloud Run endpoint
        const response = await fetch('https://logtodatabase-rgzyvy3rca-uc.a.run.app/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        });

        console.log('Response status:', response.status); // Debug log
        console.log('Response:', await response.text()); // Debug log

        if (response.ok) {
            alert('Signup successful!'); // Debug alert
            window.location.href = 'thankyou.html';
        } else {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error('Submission error:', error); // Debug log
        alert('Error submitting form: ' + error.message);
    }
}); 
