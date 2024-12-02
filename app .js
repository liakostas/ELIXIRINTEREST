app.post('/api/signup', async (req, res) => {
    try {
        const { name, email } = req.body;
        // Add your database logic here
        // For example: await db.createUser({ name, email });
        
        res.status(200).json({ message: 'Signup successful' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}); 
