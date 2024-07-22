// First fetch request
fetch('https://dummyjson.com/carts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        userId: 1,
        products: [
            {
                id: 144,
                quantity: 4,
            },
            {
                id: 98,
                quantity: 1,
            },
        ]
    })
})
.then(res => res.json())
.then(console.log);

// Second fetch request (duplicated)
fetch('https://dummyjson.com/carts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        userId: 1,
        products: [
            {
                id: 144,
                quantity: 4,
            },
            {
                id: 98,
                quantity: 1,
            },
        ]
    })
})
.then(res => res.json())
.then(console.log);
