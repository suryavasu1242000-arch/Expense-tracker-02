// Menu Management System - Admin Panel

let editingItemId = null;
let uploadedImageData = null;

function previewImage() {
    const fileInput = document.getElementById('itemImageFile');
    const preview = document.getElementById('imagePreview');
    
    if(fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            uploadedImageData = e.target.result;
            preview.innerHTML = `<img src="${e.target.result}" style="max-width: 150px; max-height: 150px; border-radius: 5px;">`;
        };
        
        reader.readAsDataURL(fileInput.files[0]);
    }
}

function displayMenuManagement() {
    const tableBody = document.getElementById('menuTableBody');
    let menuItems = loadMenuItems();
    
    tableBody.innerHTML = '';
    
    menuItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>
                ${item.image ? `<img src="${item.image}" style="width: 40px; height: 40px; border-radius: 3px;">` : '📷'}
                ${item.name}
            </td>
            <td>${item.category}</td>
            <td>₹${item.price.toFixed(2)}</td>
            <td>${item.description}</td>
            <td>
                <button class="btn-edit" onclick="openEditMenuModal(${item.id})">✏️ Edit</button>
                <button class="btn-delete" onclick="deleteMenuItem(${item.id})">🗑️ Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function openAddMenuModal() {
    editingItemId = null;
    document.getElementById('modalTitle').textContent = 'Add Menu Item';
    document.getElementById('menuForm').reset();
    document.getElementById('itemId').value = '';
    document.getElementById('menuModal').style.display = 'block';
}

function openEditMenuModal(itemId) {
    let menuItems = loadMenuItems();
    const item = menuItems.find(i => i.id === itemId);
    
    if(!item) return;
    
    editingItemId = itemId;
    uploadedImageData = item.image || null;
    
    document.getElementById('modalTitle').textContent = 'Edit Menu Item';
    document.getElementById('itemId').value = item.id;
    document.getElementById('itemName').value = item.name;
    document.getElementById('itemCategory').value = item.category;
    document.getElementById('itemPrice').value = item.price;
    document.getElementById('itemDescription').value = item.description;
    document.getElementById('itemImage').value = item.image || '';
    
    const preview = document.getElementById('imagePreview');
    if(item.image) {
        preview.innerHTML = `<img src="${item.image}" style="max-width: 150px; max-height: 150px; border-radius: 5px;">`;
    } else {
        preview.innerHTML = '';
    }
    
    document.getElementById('itemImageFile').value = '';
    
    document.getElementById('menuModal').style.display = 'block';
}

function closeMenuModal() {
    document.getElementById('menuModal').style.display = 'none';
    editingItemId = null;
}

document.getElementById('menuForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('itemName').value.trim();
    const category = document.getElementById('itemCategory').value;
    const price = parseFloat(document.getElementById('itemPrice').value);
    const description = document.getElementById('itemDescription').value.trim();
    const imageUrl = document.getElementById('itemImage').value.trim();
    
    let imageData = uploadedImageData || imageUrl || null;
    
    if(!name || !category || !price) {
        alert('Please fill in all required fields');
        return;
    }
    
    let menuItems = loadMenuItems();
    
    if(editingItemId === null) {
        // Add new item
        const newId = menuItems.length > 0 ? Math.max(...menuItems.map(i => i.id)) + 1 : 1;
        menuItems.push({
            id: newId,
            name: name,
            category: category,
            price: price,
            description: description,
            image: imageData
        });
        alert('Item added successfully!');
    } else {
        // Edit existing item
        const itemIndex = menuItems.findIndex(i => i.id === editingItemId);
        if(itemIndex !== -1) {
            menuItems[itemIndex] = {
                id: editingItemId,
                name: name,
                category: category,
                price: price,
                description: description,
                image: imageData
            };
            alert('Item updated successfully!');
        }
    }
    
    saveMenuItems(menuItems);
    closeMenuModal();
    displayMenuManagement();
});

function deleteMenuItem(itemId) {
    if(!confirm('Are you sure you want to delete this item?')) {
        return;
    }
    
    let menuItems = loadMenuItems();
    menuItems = menuItems.filter(i => i.id !== itemId);
    saveMenuItems(menuItems);
    alert('Item deleted successfully!');
    displayMenuManagement();
}

function loadMenuItems() {
    const saved = localStorage.getItem('customMenuItems');
    if(saved) {
        return JSON.parse(saved);
    }
    // Return default items if none custom items exist
    return [
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
}

function saveMenuItems(menuItems) {
    localStorage.setItem('customMenuItems', JSON.stringify(menuItems));
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('menuModal');
    if(event.target == modal) {
        closeMenuModal();
    }
}
