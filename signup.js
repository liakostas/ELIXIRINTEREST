document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('Form submitted');

    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email')
    };
    console.log('Sending data:', data);

    try {
        const response = await fetch('https://logtodatabase-rgzyvy3rca-uc.a.run.app/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        console.log('Response status:', response.status);
        
        // Redirect regardless of response status (for testing)
        window.location.href = 'thankyou.html';
        
    } catch (error) {
        console.error('Error:', error);
        // Still redirect even if there's an error (for testing)
        window.location.href = 'thankyou.html';
    }
}); 
