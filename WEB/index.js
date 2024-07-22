document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', function () {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const productCards = document.querySelectorAll('.card');

        productCards.forEach(function (card) {
            const title = card.querySelector('.card-title').innerText.toLowerCase();
            const description = card.querySelector('.card-text').innerText.toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block',display = 'center';
            } else {
                card.style.display = 'none';
            }
        });
    }); 
});


async function fetchProducts() {
    try {
        // Fetch products data from the API
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
            throw new Error('Could not fetch the resources');
        }

        const result = await response.json();
        const products = result.products;
        console.log('Products:', products);

        // Select the container and clear previous contents
        const container = document.getElementById('productContainer');
        container.innerHTML = '';

        // Function to create star rating elements
        function createStarRating(rating) {
            const starContainer = document.createElement('div');
            for (let i = 0; i < 5; i++) {
                const star = document.createElement('span');
                star.className = i < rating ? 'fa fa-star checked' : 'fa fa-star';
                starContainer.appendChild(star);
            }
            return starContainer;
        }

        // Iterate over each product and create the necessary elements
        products.forEach(product => {
            const col = document.createElement('div');
            col.className = 'col-md-4';

            const card = document.createElement('div');
            card.className = 'card mb-4';

            const imgElement = document.createElement('img');
            imgElement.src = product.thumbnail;
            imgElement.alt = product.title;
            imgElement.className = 'card-img-top';
            imgElement.style.width = '100%';

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.innerText = product.title;

            const cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.innerText = `$${product.price}`;

            const ratingElement = createStarRating(Math.round(product.rating));

            const category = document.createElement('p');
            category.className = 'card-text';
            category.innerText = `Category: ${product.category}`;

            const description = document.createElement('p');
            description.className = 'card-text';
            description.innerText = product.description;

            const detailsButton = document.createElement('a');
            detailsButton.href = 'details.html';
            detailsButton.className = 'btn btn-secondary me-2';
            detailsButton.innerText = 'Details';

            detailsButton.addEventListener('click', () => {
                // Store product details in local storage
                localStorage.setItem('selectedProduct', JSON.stringify(product));
            });

            const buyButton = document.createElement('a');
            buyButton.href = '#';
            buyButton.className = 'btn btn-primary me-2';
            buyButton.innerText = 'Buy Now';

            const cartButton = document.createElement('a');
            cartButton.href = '#';
            cartButton.className = 'btn btn-success';
            cartButton.innerText = 'Add to Cart';

            cartButton.addEventListener('click', async (event) => {
                event.preventDefault();
                try {
                    const cartResponse = await fetch('https://dummyjson.com/carts/add', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            userId: 1,
                            products: [
                                {
                                    id: product.id,
                                    quantity: 1,
                                }
                            ]
                        })
                    });
                    const cartResult = await cartResponse.json();
                    console.log('Cart Result:', cartResult);
                    // Notify the user about the product added to the cart
                    alert(`Product added to cart: ${product.title}`);
                    // Navigate to the cart page
                    window.location.href = 'cart.html';
                } catch (error) {
                    console.error('Error adding to cart:', error);
                }
            });

            // Append elements to their respective parents
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(description);
            cardBody.appendChild(category);
            cardBody.appendChild(cardText);
            cardBody.appendChild(ratingElement);
            cardBody.appendChild(detailsButton); // Add the new Details button
            cardBody.appendChild(buyButton); // Add the existing Buy Now button
            // cardBody.appendChild(cartButton); // Add the new Cart button
            card.appendChild(imgElement);
            card.appendChild(cardBody);
            col.appendChild(card);
            container.appendChild(col);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Call the function to fetch and display products
fetchProducts();
