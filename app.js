function addExpense(category, amount) {
  const date = new Date().toLocaleDateString('en-CA'); // Get current date in YYYY-MM-DD format
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${category}</td>
    <td>${amount}</td>
    <td>${date}</td>
    <td><button onclick="deleteExpense(this)">Delete</button></td>
  `;
  document.getElementById('expenses-list').appendChild(newRow);
  updateTotal();
}

// Function to delete an expense
function deleteExpense(button) {
  const row = button.parentNode.parentNode;
  row.remove();
  updateTotal();
}

// Function to update the total expenses
function updateTotal() {
  let total = 0;
  const amounts = document.querySelectorAll('#expenses-list td:nth-child(2)');
  amounts.forEach(amount => {
    total += parseInt(amount.textContent) || 0;
  });
  document.getElementById('total').textContent = total;
}

// Event listener for adding a new expense
document.getElementById('add-btn').addEventListener('click', function() {
  const category = document.getElementById('category').value;
  const amount = document.getElementById('amount').value;
    if (category && amount) {
        addExpense(category, amount);
        document.getElementById('category').value = '';
        document.getElementById('amount').value = '';
    } else {
        alert('Please fill in all fields.');
    }
});

// Initial total update
updateTotal();
