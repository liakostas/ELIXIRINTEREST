const response = await fetch('https://logtodatabase-rgzyvy3rca-uc.a.run.app/signup', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
}); 
