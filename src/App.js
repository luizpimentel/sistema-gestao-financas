import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Resume from './components/Resume';
import Form from './components/Form';
import GlobalStyle from './styles/global';

const App = () => {
  const data = localStorage.getItem('transactions');
  const [transactionsList, setTransactionsList] = useState(data ? JSON.parse(data) : []);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionsList.filter((item) => item.expense).map((transaction) => Number(transaction.amount));
    const amountIncome = transactionsList.filter((item) => !item.expense).map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0);

    const total = Math.abs(income - expense);

    setIncome(`R$ ${income.toFixed(2)}`);
    setExpense(`R$ ${expense.toFixed(2)}`);
    setTotal(`${income < expense ? "-" : ""}R$ ${total.toFixed(2)}`);
    
  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];

    setTransactionsList(newArrayTransactions);

    localStorage.setItem('transactions', JSON.stringify(newArrayTransactions));
  };

  return (
    <>
      <Header />
      <Resume income={income} expense={expense} total={total} />
      <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList} />
      <GlobalStyle />
    </>
  );
};

export default App;