import React from 'react';

const TransactionHistory = ({ transactions }) => {
  return (
    <div>
      <h2>Lịch sử giao dịch</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>{transaction.description}</li>
        ))}
      </ul>
    </div>
  );
};

export {TransactionHistory };
