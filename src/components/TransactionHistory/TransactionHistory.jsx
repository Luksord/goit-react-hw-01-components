import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ transactions }) => {
  //   const transactions = items;
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHead}>
        <tr className={css.tableRow}>
          <th className={css.tableHeader}>Type</th>
          <th className={css.tableHeader}>Amount</th>
          <th className={css.tableHeader}>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tableBody}>
        {transactions.map(transaction => (
          <tr className={css.tableRow} key={transaction.id}>
            <td className={css.tableData}>{transaction.type}</td>
            <td className={css.tableData}>{transaction.amount}</td>
            <td className={css.tableData}>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
