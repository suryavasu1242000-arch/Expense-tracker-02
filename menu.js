// Menu Management System

function getMenuItems() {
    const saved = localStorage.getItem('customMenuItems');
    if(saved) {
        return JSON.parse(saved);
    }
    // Return default items
    return MENU_ITEMS;
}

const MENU_ITEMS = [
    { id: 1, name: 'Poori', price: 20, category: 'Breads', description: 'Fried Indian bread' },
    { id: 2, name: 'Vada', price: 25, category: 'Snacks', description: 'Savory fried lentil cake' },
    { id: 3, name: 'Dosa', price: 50, category: 'Main Course', description: 'Crispy rice and lentil pancake' },
    { id: 4, name: 'Paratha', price: 30, category: 'Breads', description: 'Layered Indian flatbread' },
    { id: 5, name: 'Idly', price: 35, category: 'Main Course', description: 'Steamed rice and lentil cake' },
    { id: 6, name: 'Veg Meal', price: 80, category: 'Meals', description: 'Complete vegetarian meal' },
    { id: 7, name: 'Chicken Curry Meal', price: 120, category: 'Meals', description: 'Chicken curry with rice/bread' },
    { id: 8, name: 'Chicken Biryani', price: 150, category: 'Rice Dishes', description: 'Fragrant chicken biryani' },
    { id: 9, name: 'Mutton Biryani', price: 180, category: 'Rice Dishes', description: 'Premium mutton biryani' }
];

function displayMenu() {
    const menuGrid = document.getElementById('menuGrid');
    menuGrid.innerHTML = '';
    
    const menuItems = getMenuItems();
    
    menuItems.forEach(item => {
        const menuCard = document.createElement('div');
        menuCard.className = 'menu-card';
        let imageHTML = '';
        if(item.image) {
            imageHTML = `<div class="menu-card-image"><img src="${item.image}" alt="${item.name}"></div>`;
        } else {
            imageHTML = `<div class="menu-card-image placeholder">📷</div>`;
        }
        
        menuCard.innerHTML = `
            ${imageHTML}
            <div class="menu-card-header">
                <h3>${item.name}</h3>
                <span class="menu-price">₹${item.price}</span>
            </div>
            <p class="menu-category">${item.category}</p>
            <p class="menu-description">${item.description}</p>
            <div class="menu-card-footer">
                <input type="number" class="item-quantity" value="1" min="1" max="100">
                <button class="btn-primary" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
        `;
        menuGrid.appendChild(menuCard);
    });
}

function getMenuItemById(id) {
    const menuItems = getMenuItems();
    return menuItems.find(item => item.id === id);
}
