document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email')
    };

    try {
        const response = await fetch('https://logtodatabase-rgzyvy3rca-uc.a.run.app/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            // Redirect to thank you page on successful submission
            window.location.href = 'thankyou.html';
        } else {
            throw new Error('Signup failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Sorry, something went wrong. Please try again.');
    }
}); 
