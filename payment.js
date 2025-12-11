// Payment Processing System

function displayOrderSummary() {
    const cart = getCart();
    const summaryDiv = document.getElementById('orderSummary');
    
    if(cart.items.length === 0) {
        summaryDiv.innerHTML = '<p>No items in your order</p>';
        return;
    }
    
    let html = '<table style="width: 100%;">';
    html += '<tr><th style="text-align: left;">Item</th><th style="text-align: center;">Qty</th><th style="text-align: right;">Price</th><th style="text-align: right;">Total</th></tr>';
    
    cart.items.forEach(item => {
        html += `<tr>
            <td>${item.name}</td>
            <td style="text-align: center;">${item.quantity}</td>
            <td style="text-align: right;">₹${item.price.toFixed(2)}</td>
            <td style="text-align: right;">₹${(item.price * item.quantity).toFixed(2)}</td>
        </tr>`;
    });
    
    html += '</table>';
    html += `<div style="margin-top: 20px; border-top: 2px solid #ddd; padding-top: 10px;">
        <div style="display: flex; justify-content: space-between; margin: 10px 0;">
            <span>Subtotal:</span>
            <span>₹${cart.subtotal.toFixed(2)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin: 10px 0;">
            <span>Tax (5%):</span>
            <span>₹${cart.tax.toFixed(2)}</span>
        </div>
        <div style="display: flex; justify-content: space-between; font-weight: bold; font-size: 18px; margin: 10px 0;">
            <span>Total Amount:</span>
            <span>₹${cart.total.toFixed(2)}</span>
        </div>
    </div>`;
    
    summaryDiv.innerHTML = html;
}

function validateCardPayment() {
    const cardName = document.getElementById('cardName').value.trim();
    const cardNumber = document.getElementById('cardNumber').value.trim().replace(/\s/g, '');
    const expiry = document.getElementById('expiry').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    
    if(!cardName) {
        alert('Please enter card holder name');
        return false;
    }
    
    if(cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
        alert('Please enter a valid 16-digit card number');
        return false;
    }
    
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if(!expiryRegex.test(expiry)) {
        alert('Please enter expiry date in MM/YY format');
        return false;
    }
    
    if(cvv.length !== 3 || !/^\d+$/.test(cvv)) {
        alert('Please enter a valid 3-digit CVV');
        return false;
    }
    
    return true;
}

function validateCashPayment() {
    const amountReceived = parseFloat(document.getElementById('amountReceived').value) || 0;
    const cart = getCart();
    
    if(amountReceived < cart.total) {
        alert(`Please enter amount greater than or equal to ₹${cart.total.toFixed(2)}`);
        return false;
    }
    
    return true;
}

function validateGooglePayPayment() {
    const paymentConfirm = document.getElementById('paymentConfirm').checked;
    if(!paymentConfirm) {
        alert('Please confirm that you have completed the payment via Google Pay');
        return false;
    }
    return true;
}

function generateGooglePayQR() {
    const cart = getCart();
    const upiId = 'restaurant@googlepay';
    const amount = cart.total;
    
    // Generate UPI string for QR code
    // Format: upi://pay?pa=UPI_ID&pn=NAME&am=AMOUNT&tn=DESCRIPTION&tr=TRANSACTION_ID
    const transactionId = 'TXN' + Date.now();
    const upiString = `upi://pay?pa=${upiId}&pn=Restaurant&am=${amount}&tn=Order&tr=${transactionId}`;
    
    // Clear previous QR code
    document.getElementById('qrCode').innerHTML = '';
    
    // Generate new QR code
    new QRCode(document.getElementById('qrCode'), {
        text: upiString,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
    
    // Update UPI ID and amount display
    document.getElementById('upiId').textContent = upiId;
    document.getElementById('qrAmount').textContent = `₹${amount.toFixed(2)}`;
}

function completePayment() {
    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    
    if(paymentMethod === 'card') {
        if(!validateCardPayment()) {
            return;
        }
    } else if(paymentMethod === 'cash') {
        if(!validateCashPayment()) {
            return;
        }
    } else if(paymentMethod === 'googlepay') {
        if(!validateGooglePayPayment()) {
            return;
        }
    }
    
    const cart = getCart();
    const currentUser = localStorage.getItem('currentUser');
    
    // Save transaction
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const transaction = {
        id: 'TXN' + Date.now(),
        user: currentUser,
        items: cart.items,
        subtotal: cart.subtotal,
        tax: cart.tax,
        total: cart.total,
        paymentMethod: paymentMethod,
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleDateString('en-IN')
    };
    
    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    
    // Clear cart
    const cartKey = `cart_${currentUser}`;
    localStorage.removeItem(cartKey);
    
    // Show success message with print option
    const printChoice = confirm(`Payment successful!\nTransaction ID: ${transaction.id}\nAmount: ₹${transaction.total.toFixed(2)}\n\nClick OK to print receipt, Cancel to continue`);
    
    if(printChoice) {
        // Open print page
        window.location.href = `print-receipt.html?txn=${transaction.id}`;
    } else {
        window.location.href = 'dashboard.html';
    }
}

function getPaymentMethodName(method) {
    switch(method) {
        case 'card': return 'Card Payment';
        case 'cash': return 'Cash';
        case 'googlepay': return 'Google Pay';
        default: return 'Unknown';
    }
}

// Format card number with spaces
document.addEventListener('DOMContentLoaded', function() {
    const cardNumberInput = document.getElementById('cardNumber');
    if(cardNumberInput) {
        cardNumberInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '').slice(0, 16);
            let formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 ');
            e.target.value = formattedValue;
        });
    }
});
