<!DOCTYPE html>
<html>
<head>
    <title>Expense Tracker App</title>
</head>
<body>
    <h1>Expense Tracker App</h1>

    <form id="expense-form">
        <label for="category">Category:</label>
        <select id="category" name="category">
            <option value="Food & Beverage">Food & Beverage</option>
            <option value="Rent">Rent</option>
            </select><br><br>

        <label for="amount">Amount:</label>
        <input type="number" id="amount" name="amount"><br><br>

        <label for="date">Date:</label>
        <input type="date" id="date" name="date" value="2025-05-23"><br><br>

        <button type="button" onclick="addExpense()">Add</button>
    </form>

    <h2>Expenses List</h2>
    <table id="expenses-table">
        <thead>
            <tr>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            <% expenses.forEach(function(expense) { %>
                <tr>
                    <td><%= expense.category %></td>
                    <td><%= expense.amount %></td>
                    <td><%= expense.date %></td>
                    <td><button onclick="deleteExpense('<%= expense.id %>')">Delete</button></td>
                </tr>
            <% }); %>
        </tbody>
    </table>

    <h3>Total: <%= total %></h3>

    <script>
        function addExpense() {
           
        }

        function deleteExpense(id) {
            
        }
    </script>
</body>
</html>
