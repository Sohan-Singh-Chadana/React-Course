import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTabel from "./components/ExpenseTabel";
import expenseData from "./components/expenseData";
import ContextMenu from "./components/ContextMenu";

function App() {
  const [expenses, setExpenses] = useState(expenseData);

  const [expensest, setExpensest] = useState(
    expenses.map(({ amount }) => amount)
  );

  const addExpense = (newExpense) => {
    setExpensest([...expensest, newExpense]);
  };

  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm setExpenses={setExpenses} addExpense={addExpense} />
          <ExpenseTabel expenses={expenses} expensest={expensest} />
          {/* <ContextMenu /> */}
        </div>
      </main>
    </>
  );
}

export default App;
