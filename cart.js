// Shopping Cart System

function getCart() {
    const currentUser = localStorage.getItem('currentUser');
    const cartKey = `cart_${currentUser}`;
    const cart = JSON.parse(localStorage.getItem(cartKey)) || {
        items: [],
        subtotal: 0,
        tax: 0,
        total: 0
    };
    return cart;
}

function saveCart(cart) {
    const currentUser = localStorage.getItem('currentUser');
    const cartKey = `cart_${currentUser}`;
    localStorage.setItem(cartKey, JSON.stringify(cart));
}

function addToCart(itemId) {
    const quantity = parseInt(document.querySelector(`[data-item-id="${itemId}"] .item-quantity`)?.value) || 
                    parseInt(document.querySelector('.item-quantity')?.value) || 1;
    
    const menuItem = getMenuItemById(itemId);
    if(!menuItem) return;
    
    let cart = getCart();
    
    const existingItem = cart.items.find(i => i.id === itemId);
    if(existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.items.push({
            id: itemId,
            name: menuItem.name,
            price: menuItem.price,
            quantity: quantity
        });
    }
    
    updateCartCalculations(cart);
    saveCart(cart);
    updateCartDisplay();
    alert(`${menuItem.name} added to cart!`);
}

function removeFromCart(itemId) {
    let cart = getCart();
    cart.items = cart.items.filter(i => i.id !== itemId);
    updateCartCalculations(cart);
    saveCart(cart);
    updateCartDisplay();
}

function updateItemQuantity(itemId, newQuantity) {
    newQuantity = parseInt(newQuantity);
    if(newQuantity <= 0) {
        removeFromCart(itemId);
        return;
    }
    
    let cart = getCart();
    const item = cart.items.find(i => i.id === itemId);
    if(item) {
        item.quantity = newQuantity;
        updateCartCalculations(cart);
        saveCart(cart);
        updateCartDisplay();
    }
}

function updateCartCalculations(cart) {
    const subtotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.05;
    const total = subtotal + tax;
    
    cart.subtotal = subtotal;
    cart.tax = tax;
    cart.total = total;
}

function updateCartDisplay() {
    const cart = getCart();
    const cartItemsDiv = document.getElementById('cartItems');
    
    if(cart.items.length === 0) {
        cartItemsDiv.innerHTML = '<p class="empty-cart">No items added</p>';
    } else {
        cartItemsDiv.innerHTML = cart.items.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>₹${item.price} x <input type="number" class="qty-input" value="${item.quantity}" min="1" onchange="updateItemQuantity(${item.id}, this.value)"></p>
                </div>
                <div class="cart-item-total">
                    <p>₹${(item.price * item.quantity).toFixed(2)}</p>
                    <button class="btn-delete" onclick="removeFromCart(${item.id})">Delete</button>
                </div>
            </div>
        `).join('');
    }
    
    document.getElementById('subtotal').textContent = `₹${cart.subtotal.toFixed(2)}`;
    document.getElementById('tax').textContent = `₹${cart.tax.toFixed(2)}`;
    document.getElementById('total').textContent = `₹${cart.total.toFixed(2)}`;
}

function clearCart() {
    if(confirm('Are you sure you want to clear the cart?')) {
        const currentUser = localStorage.getItem('currentUser');
        const cartKey = `cart_${currentUser}`;
        localStorage.removeItem(cartKey);
        updateCartDisplay();
    }
}
