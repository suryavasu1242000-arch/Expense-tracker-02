# 🍽️ Restaurant Billing Software

A complete web-based billing system for restaurants built with HTML, CSS, and JavaScript. Features user authentication, menu management, shopping cart, payment processing (card & cash), and monthly reports.

## 📁 Project Structure

```
g:\vs.html/
├── index.html              # Login page
├── signup.html             # User registration
├── dashboard.html          # Main billing interface
├── menu-management.html    # Menu management (add/edit/delete items)
├── payment.html            # Payment processing
├── reports.html            # Monthly billing reports
├── settings.html           # User settings & profile
├── css/
│   ├── style.css          # Main styles (auth pages)
│   └── dashboard.css      # Dashboard & all pages styles
└── js/
    ├── auth.js            # User authentication
    ├── menu.js            # Menu items management
    ├── menu-management.js # Menu CRUD operations
    ├── cart.js            # Shopping cart functionality
    ├── payment.js         # Payment processing
    └── reports.js         # Reports & analytics
```

## ✨ Features

### 1. **User Authentication**
- User registration with email
- Secure login system
- Password management
- Account settings

### 2. **Menu Management** ⭐ NEW
- Add new menu items
- Edit existing menu items
- Delete menu items
- Change prices and descriptions
- Categorize items
- Real-time menu updates in billing

### 3. **Menu Display in Billing**
- Display all menu items with prices
- Add items to cart with quantity
- Real-time price calculation

### 4. **Shopping Cart**
- Add/remove items
- Quantity management
- Automatic tax calculation (5%)
- Running total display

### 5. **Payment Processing**
- **Card Payment**: Validate card details (number, expiry, CVV)
- **Cash Payment**: Calculate change automatically
- **Google Pay QR Payment** ⭐ NEW: Generate QR codes for UPI payments
- Transaction recording
- Unique transaction IDs

### 6. **Monthly Reports**
- View transactions by month
- Revenue analytics
- Order statistics
- Menu item sales tracking
- Download reports as CSV

### 7. **User Settings**
- View profile information
- Change password
- Account deletion option

## 🚀 Getting Started

### 1. Open the Application
1. Navigate to `g:\vs.html\index.html` in your web browser
2. Or use VS Code's Live Server extension for a better experience

### 2. Create an Account
- Click "Create Account" on the login page
- Enter username, email, and password
- Password must be at least 6 characters
- Username must be at least 3 characters

### 3. Login
- Use your credentials to login
- You'll be taken to the main billing dashboard

### 4. Create an Order
1. On the dashboard, view all menu items
2. Select quantity for each item
3. Click "Add to Cart"
4. Review items in the right panel
5. Click "Proceed to Payment"

### 5. Complete Payment
- Choose payment method (Card, Cash, or Google Pay)
- For **Card**: Enter card details
- For **Cash**: Enter amount received
- For **Google Pay** ⭐ NEW:
  - QR code is automatically generated
  - Scan with Google Pay/PhonePe/Any UPI app
  - Confirm payment completion
- Click "Complete Payment"
- Transaction is recorded automatically

### 6. Manage Menu (Admin)
- Click "Menu" in the navigation bar
- Click "➕ Add New Item" to add menu items
- Click "✏️ Edit" to modify existing items
- Click "🗑️ Delete" to remove items
- All changes update immediately in billing

### 7. View Reports
- Go to Reports tab
- Select month/year
- View order history and analytics
- Download report as CSV file

## 💾 Data Storage

All data is stored in the browser's **localStorage**:
- **Users**: `users` - User accounts and credentials
- **Cart**: `cart_[username]` - Current shopping cart
- **Transactions**: `transactions` - All completed orders

⚠️ **Note**: Data persists only in the same browser/device. Clearing browser cache will delete all data.

## 🎯 Menu Items with Pricing

| Item | Price | Category |
|------|-------|----------|
| Poori | ₹20 | Breads |
| Vada | ₹25 | Snacks |
| Dosa | ₹50 | Main Course |
| Paratha | ₹30 | Breads |
| Idly | ₹35 | Main Course |
| Veg Meal | ₹80 | Meals |
| Chicken Curry Meal | ₹120 | Meals |
| Chicken Biryani | ₹150 | Rice Dishes |
| Mutton Biryani | ₹180 | Rice Dishes |

**Note**: You can add, edit, or delete menu items from the Menu Management page.

## 📱 Google Pay QR Payment

### How to Use Google Pay Payment:
1. During checkout, select "📱 Google Pay QR Payment"
2. A QR code appears automatically on the screen
3. Scan the QR code using:
   - Google Pay
   - PhonePe
   - PayTM
   - Or any UPI-enabled app
4. Complete the payment in your app
5. Check the confirmation box "I have completed the payment via Google Pay"
6. Click "Complete Payment"

### UPI Details:
- **UPI ID**: restaurant@googlepay
- **Auto-generated Transaction ID**: Unique for each order

## 🔐 Sample Login (for Testing)

You can create your own account, or after creating an account once, use those credentials for subsequent logins.

## 📊 Reports Features

- **Total Orders**: Count of transactions in selected month
- **Total Revenue**: Sum of all transaction amounts
- **Average Order Value**: Revenue ÷ Orders
- **Transaction Details**: Complete order history
- **Menu Sales**: Which items sold most
- **CSV Download**: Export reports for external use

## 🛠️ Customization

### Adding New Menu Items
Edit `js/menu.js` - `MENU_ITEMS` array:
```javascript
const MENU_ITEMS = [
    { id: 10, name: 'New Item', price: 100, category: 'Category', description: 'Description' },
    // Add more items...
];
```

### Change Tax Rate
In `js/cart.js`, modify the tax calculation:
```javascript
const tax = subtotal * 0.05;  // Change 0.05 to desired rate
```

### Modify Colors
Edit `css/style.css` and `css/dashboard.css`:
- Primary color: `#667eea` (change all occurrences)
- Secondary color: `#2c3e50` (change all occurrences)

## 🔍 Testing

### Test Card Numbers (use with any expiry/CVV):
- `4111 1111 1111 1111` - Works for testing
- Card details validation is done client-side

### Test Transactions:
1. Create multiple orders with different items
2. Try both card and cash payments
3. Check reports to verify transactions are recorded

## 📱 Browser Compatibility

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (Responsive design)

## ⚠️ Important Notes

1. **No Backend Required**: This is a frontend-only application
2. **Data Privacy**: Passwords are stored in plain text (for demo only). Use hashing for production.
3. **Payment Processing**: Card payment is simulated. For production, integrate with Stripe/PayPal.
4. **Email Verification**: Email is not validated. Add email verification for production.
5. **Security**: This is a demo application. Implement proper security measures for production use.

## 🔄 Workflow

```
Login/SignUp → Dashboard → Select Items → Add to Cart → Checkout → Payment → Transaction Saved → View Reports
```

## 📝 License

Free to use and modify for your restaurant needs.

## 🎓 Technologies Used

- **HTML5**: Page structure
- **CSS3**: Responsive styling and animations
- **Vanilla JavaScript**: All functionality
- **LocalStorage API**: Data persistence

---

**Version**: 1.0  
**Last Updated**: December 2025  
**Status**: Ready for Use ✅
