# 🚀 Quick Start Guide

## What's New? ⭐

### Menu Management
- **Add Items**: Go to "Menu" tab → "Add New Item" button
- **Edit Items**: Click "Edit" on any menu item
- **Delete Items**: Click "Delete" (with confirmation)
- Changes reflect immediately in billing dashboard

### Google Pay QR Payment
- **Automatic QR**: Scan with any UPI app
- **Supported Apps**: Google Pay, PhonePe, PayTM, Bhim, WhatsApp Pay
- **No Entry Needed**: Just scan and pay
- **Transaction Tracking**: Unique ID for each payment

---

## Step-by-Step Example

### 1️⃣ Add a New Menu Item

```
1. Login to Dashboard
2. Click "Menu" in navbar
3. Click "➕ Add New Item"
4. Fill form:
   - Item Name: "Samosa"
   - Category: "Snacks"
   - Price: 15
   - Description: "Crispy potato filled pastry"
5. Click "Save Item"
✅ Item added! Now appears in Billing
```

### 2️⃣ Create Order with New Item

```
1. Go to "Billing" (Dashboard)
2. Find your new item in menu
3. Select quantity (e.g., 2)
4. Click "Add to Cart"
5. Review in order panel
6. Click "Proceed to Payment"
```

### 3️⃣ Pay with Google Pay QR

```
1. On Payment page
2. Select "📱 Google Pay QR Payment"
3. QR code appears
4. Open Google Pay/PhonePe app
5. Scan QR code
6. Complete payment in app
7. Check "I have completed the payment"
8. Click "Complete Payment"
✅ Transaction saved!
```

### 4️⃣ Check Reports

```
1. Go to "Reports"
2. Select month/year
3. See:
   - Total orders
   - Total revenue
   - Sales breakdown
4. Click "Download Report" for CSV
```

---

## Payment Methods at a Glance

| Method | How | When |
|--------|-----|------|
| 💳 Card | Enter 16 digits + CVV | Online orders |
| 💵 Cash | Enter amount received | In-person |
| 📱 Google Pay | Scan QR | UPI users |

---

## File Structure

```
Your Website
├── Billing (dashboard.html)
├── Menu Management (menu-management.html) ⭐ NEW
├── Payment (payment.html)
├── Reports (reports.html)
└── Settings (settings.html)
```

---

## Key Features Summary

✅ User Authentication  
✅ Menu CRUD Operations (Add/Edit/Delete)  
✅ Shopping Cart  
✅ 3 Payment Methods (Card, Cash, Google Pay QR)  
✅ Monthly Reports & Analytics  
✅ Transaction History  
✅ CSV Export  
✅ User Settings  
✅ Responsive Design  

---

## Default Menu Items

- Poori (₹20)
- Vada (₹25)
- Dosa (₹50)
- Paratha (₹30)
- Idly (₹35)
- Veg Meal (₹80)
- Chicken Curry Meal (₹120)
- Chicken Biryani (₹150)
- Mutton Biryani (₹180)

**You can modify these from Menu Management page!**

---

## Tips

🔹 **Save Menu Items**: After adding, check Billing to see updates  
🔹 **QR Payment**: Works with any UPI app  
🔹 **Reports**: Always use Month selector for accurate data  
🔹 **Transaction ID**: Unique for every order, helps track payments  
🔹 **Change**: Automatically calculated for cash payments  

---

## Browser Requirements

- Modern browser (Chrome, Edge, Firefox, Safari)
- JavaScript enabled
- Cookies/LocalStorage enabled
- QR Code: Works automatically (no additional setup)

---

## Keyboard Shortcuts

- `F5` - Refresh page
- `F12` - Open Developer Tools (for debugging)
- `Ctrl+Shift+Delete` - Clear browser data (caution: loses all data)

---

## Frequently Asked Questions

**Q: Can I change menu prices?**  
A: Yes! Go to Menu → Edit → Change Price → Save

**Q: How do I see all transactions?**  
A: Go to Reports → Select Month → View transaction table

**Q: What if QR doesn't appear?**  
A: Ensure cart has items with total > ₹0, then select Google Pay

**Q: Can I download reports?**  
A: Yes! Click "Download Report" button on Reports page

**Q: Where is my data stored?**  
A: Browser's LocalStorage (stays in this browser only)

---

**Ready to use!** 🎉  
Open `index.html` in your browser to start!
