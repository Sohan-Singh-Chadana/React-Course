import React, { useState } from "react";

const ExpenseForm = ({ setExpenses, addExpense }) => {
  // const [title, setTitle] = useState("");
  // const [category, setCategory] = useState("");
  // const [amount, setAmount] = useState("");
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // const expense = { title, category, amount, id: crypto.randomUUID() };
    // setExpenses((prevState) => [...prevState, expense]);
    // setTitle("");
    // setCategory("");
    // setAmount("");

    //? second aproach
    expense.title === "" && expense.category === "" && expense.amount === ""
      ? null
      : setExpenses((prevState) => [
          ...prevState,
          { ...expense, id: crypto.randomUUID() },
        ]);

    setExpense({
      title: "",
      category: "",
      amount: "",
    });

    expense.amount === "" ? null : addExpense(parseInt(expense.amount));

    //? *****************
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={expense.title}
          // onChange={(e) => setTitle(e.target.value)}
          onChange={(e) =>
            setExpense((prevState) => ({ ...prevState, title: e.target.value }))
          }
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expense.category}
          // onChange={(e) => setCategory(e.target.value)}
          onChange={(e) =>
            setExpense((prevState) => ({
              ...prevState,
              category: e.target.value,
            }))
          }
        >
          <option hidden value="">
            Select Category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={expense.amount}
          // onChange={(e) => setAmount(e.target.value)}
          onChange={(e) =>
            setExpense((prevState) => ({
              ...prevState,
              amount: e.target.value,
            }))
          }
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
