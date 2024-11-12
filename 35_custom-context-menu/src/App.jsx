import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTabel from "./components/ExpenseTabel";
import expenseData from "./components/expenseData";

function App() {
  const [expenses, setExpenses] = useState(expenseData);

  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm setExpenses={setExpenses} />
          <ExpenseTabel expenses={expenses} setExpenses={setExpenses} />
        </div>
      </main>
    </>
  );
}

export default App;
