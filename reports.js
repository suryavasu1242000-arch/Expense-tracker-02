// Reports and Analytics System

function generateReport() {
    const selectedMonth = document.getElementById('reportMonth').value;
    const [year, month] = selectedMonth.split('-');
    
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    
    // Filter transactions by selected month
    const filteredTransactions = transactions.filter(t => {
        const txnDate = new Date(t.timestamp);
        return txnDate.getFullYear() === parseInt(year) && 
               (txnDate.getMonth() + 1) === parseInt(month);
    });
    
    // Calculate stats
    const totalOrders = filteredTransactions.length;
    const totalRevenue = filteredTransactions.reduce((sum, t) => sum + t.total, 0);
    const avgOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;
    
    // Count payment methods
    const paymentMethods = {};
    filteredTransactions.forEach(t => {
        paymentMethods[t.paymentMethod] = (paymentMethods[t.paymentMethod] || 0) + 1;
    });
    
    // Update stats display
    document.getElementById('totalOrders').textContent = totalOrders;
    document.getElementById('totalRevenue').textContent = `₹${totalRevenue.toFixed(2)}`;
    document.getElementById('avgOrderValue').textContent = `₹${avgOrderValue.toFixed(2)}`;
    document.getElementById('paymentMethods').textContent = Object.keys(paymentMethods).join(', ') || 'None';
    
    // Display transaction details
    displayTransactionTable(filteredTransactions);
    
    // Display menu item sales
    displayMenuSales(filteredTransactions);
}

function displayTransactionTable(transactions) {
    const tableBody = document.getElementById('reportTableBody');
    
    if(transactions.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="6" style="text-align: center;">No transactions found</td></tr>';
        return;
    }
    
    tableBody.innerHTML = transactions.map(t => `
        <tr>
            <td>${t.date}</td>
            <td>${t.id}</td>
            <td>${t.items.map(i => `${i.name} (x${i.quantity})`).join(', ')}</td>
            <td>₹${t.total.toFixed(2)}</td>
            <td>${t.paymentMethod === 'card' ? '💳 Card' : '💵 Cash'}</td>
            <td>${t.user}</td>
        </tr>
    `).join('');
}

function displayMenuSales(transactions) {
    const menuSalesMap = {};
    
    transactions.forEach(t => {
        t.items.forEach(item => {
            if(!menuSalesMap[item.name]) {
                menuSalesMap[item.name] = {
                    name: item.name,
                    quantity: 0,
                    revenue: 0
                };
            }
            menuSalesMap[item.name].quantity += item.quantity;
            menuSalesMap[item.name].revenue += item.price * item.quantity;
        });
    });
    
    const menuSalesBody = document.getElementById('menuSalesBody');
    const menuSalesArray = Object.values(menuSalesMap);
    
    if(menuSalesArray.length === 0) {
        menuSalesBody.innerHTML = '<tr><td colspan="3" style="text-align: center;">No sales data</td></tr>';
        return;
    }
    
    menuSalesArray.sort((a, b) => b.revenue - a.revenue);
    
    menuSalesBody.innerHTML = menuSalesArray.map(item => `
        <tr>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>₹${item.revenue.toFixed(2)}</td>
        </tr>
    `).join('');
}

function downloadReport() {
    const selectedMonth = document.getElementById('reportMonth').value;
    const transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    const [year, month] = selectedMonth.split('-');
    
    const filteredTransactions = transactions.filter(t => {
        const txnDate = new Date(t.timestamp);
        return txnDate.getFullYear() === parseInt(year) && 
               (txnDate.getMonth() + 1) === parseInt(month);
    });
    
    const totalRevenue = filteredTransactions.reduce((sum, t) => sum + t.total, 0);
    const avgOrderValue = filteredTransactions.length > 0 ? totalRevenue / filteredTransactions.length : 0;
    
    let csvContent = "Restaurant Billing Report\n";
    csvContent += `Report Period: ${selectedMonth}\n`;
    csvContent += `Generated on: ${new Date().toLocaleString('en-IN')}\n\n`;
    
    csvContent += "SUMMARY\n";
    csvContent += `Total Orders,${filteredTransactions.length}\n`;
    csvContent += `Total Revenue,₹${totalRevenue.toFixed(2)}\n`;
    csvContent += `Average Order Value,₹${avgOrderValue.toFixed(2)}\n\n`;
    
    csvContent += "TRANSACTION DETAILS\n";
    csvContent += "Date,Transaction ID,Items,Amount,Payment Method,User\n";
    
    filteredTransactions.forEach(t => {
        const itemsStr = t.items.map(i => `${i.name} (x${i.quantity})`).join('; ');
        csvContent += `${t.date},${t.id},"${itemsStr}",₹${t.total.toFixed(2)},${t.paymentMethod},${t.user}\n`;
    });
    
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent));
    element.setAttribute('download', `restaurant_report_${selectedMonth}.csv`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
