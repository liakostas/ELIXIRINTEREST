// Test with POST
const response = await fetch('https://logtodatabase-rgzyvy3rca-uc.a.run.app/signup', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
});

// Or test with GET to see if the endpoint is accessible
const testResponse = await fetch('https://logtodatabase-rgzyvy3rca-uc.a.run.app/signup'); 
