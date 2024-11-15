import React, { useEffect, useRef, useState } from "react";

const ExpenseForm = ({ setExpenses, addExpense }) => {
  const [expense, setExpense] = useState({
    title: "",
    category: "",
    amount: "",
  });

  // const titleRef = useRef();
  // const categoryRef = useRef();
  // const amountRef = useRef();

  // useEffect(() => {
  //   console.log(titleRef);
  //   console.log("rendering");
  // });

  const handleSubmit = (e) => {
    e.preventDefault();

    // ? useState logic
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

    //? useRef logic
    // setExpenses((prevState) => [
    //   ...prevState,
    //   {
    //     title: titleRef.current.value,
    //     category: categoryRef.current.value,
    //     amount: amountRef.current.value,
    //     id: crypto.randomUUID(),
    //   },
    // ]);

    // addExpense(parseInt(amountRef.current.value));
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={expense.title}
          onChange={(e) =>
            setExpense((prevState) => ({
              ...prevState,
              title: e.target.value,
            }))
          }
          // ref={titleRef}
        />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={expense.category}
          onChange={(e) =>
            setExpense((prevState) => ({
              ...prevState,
              category: e.target.value,
            }))
          }
          // ref={categoryRef}
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
          onChange={(e) =>
            setExpense((prevState) => ({
              ...prevState,
              amount: e.target.value,
            }))
          }
          // ref={amountRef}
        />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
