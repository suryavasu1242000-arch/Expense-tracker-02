# 🍽️ Restaurant Billing Software - User Guide

## New Features Added

### 1. Menu Management System ⭐
**Location**: Menu tab in navigation bar

**Features**:
- ➕ Add new menu items
- ✏️ Edit existing items  
- 🗑️ Delete items
- Change prices and descriptions
- Categorize items

**How to Use**:
1. Go to Dashboard
2. Click "Menu" in navbar
3. Click "➕ Add New Item"
4. Fill in:
   - Item Name (required)
   - Category (required) - Choose from: Breads, Snacks, Main Course, Meals, Rice Dishes, Beverages, Desserts, Other
   - Price in ₹ (required)
   - Description (optional)
5. Click "Save Item"
6. To Edit: Click ✏️ Edit on any item
7. To Delete: Click 🗑️ Delete (confirmation required)

### 2. Google Pay QR Payment ⭐
**Location**: Payment page

**Features**:
- Automatic QR code generation
- Supports all UPI apps
- Shows payment amount
- Unique transaction tracking

**How to Use**:
1. Add items to cart and proceed to payment
2. Select "📱 Google Pay QR Payment"
3. QR code appears automatically
4. Open any UPI app (Google Pay, PhonePe, PayTM, etc.)
5. Scan the QR code
6. Complete payment in the app
7. Check "I have completed the payment via Google Pay"
8. Click "Complete Payment"

## Payment Methods

### 💳 Card Payment
- Enter card holder name
- 16-digit card number
- Expiry date (MM/YY)
- 3-digit CVV
- Simulated processing

### 💵 Cash Payment
- Enter amount received
- System calculates change automatically
- Perfect for manual/cash transactions

### 📱 Google Pay QR
- Scan with any UPI app
- No manual entry needed
- Secure UPI payment
- Instant confirmation

## Menu Management Features

### Default Menu Items:
1. Poori - ₹20 (Breads)
2. Vada - ₹25 (Snacks)
3. Dosa - ₹50 (Main Course)
4. Paratha - ₹30 (Breads)
5. Idly - ₹35 (Main Course)
6. Veg Meal - ₹80 (Meals)
7. Chicken Curry Meal - ₹120 (Meals)
8. Chicken Biryani - ₹150 (Rice Dishes)
9. Mutton Biryani - ₹180 (Rice Dishes)

### Available Categories:
- Breads
- Snacks
- Main Course
- Meals
- Rice Dishes
- Beverages
- Desserts
- Other

## Transaction Tracking

Each transaction records:
- Unique Transaction ID (TXN + Timestamp)
- User who made the order
- All items ordered with quantities
- Subtotal, Tax (5%), and Total
- Payment method used
- Date and time of transaction

## Reports

Access reports to see:
- Total orders in selected month
- Total revenue
- Average order value
- Payment method breakdown
- Order history details
- Menu item sales statistics
- Download as CSV file

## Data Storage

All data is stored in browser localStorage:
- **customMenuItems**: Your custom menu items
- **users**: User accounts
- **cart_[username]**: Current shopping cart
- **transactions**: All completed orders

**Important**: 
- Data persists in the same browser only
- Clearing cache deletes all data
- No server/cloud backup
- For production, add database

## Tips & Tricks

1. **Quick Menu Update**: Edit prices directly from Menu Management
2. **Transaction History**: All payments show in Reports
3. **Revenue Analysis**: Use Reports to analyze sales by month
4. **Item Popularity**: Menu sales tab shows best-selling items
5. **Change Calculation**: Automatic for cash payments
6. **UPI Payment**: Works offline if app has cached UPI credentials

## Troubleshooting

### Menu items not showing:
- Refresh the page (F5)
- Check if items were properly saved

### Google Pay QR not appearing:
- Make sure amount is greater than 0
- Try different payment method first, then select Google Pay again

### Payment not recording:
- Check if cash amount meets or exceeds total
- For Google Pay, confirm payment completion checkbox

### Password reset:
- Go to Settings
- Enter current and new password
- Changes take effect immediately

## Support

For issues:
1. Check browser console (F12) for errors
2. Verify all required fields are filled
3. Try refreshing the page
4. Clear browser cache if data seems corrupted
5. Check localStorage using browser developer tools

## Security Notes

⚠️ **Remember**:
- This is a demo application
- Passwords stored in plain text (not for production)
- No real payment processing
- Card details are simulated only
- Google Pay integration is for demo with test UPI ID
- Use proper encryption in production

---

**Version**: 2.0 (With Menu Management & Google Pay QR)  
**Last Updated**: December 2025
