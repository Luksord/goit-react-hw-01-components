import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const generateRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <div className={css.titleContainer}>
        {title && <h2 className={css.title}>{title}</h2>}
      </div>
      <ul className={css.statList}>
        {stats.map(stat => (
          <li
            className={css.item}
            key={stat.id}
            style={{ backgroundColor: generateRandomColor() }}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.protoTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

// Statistics.propTypes = {
//   data: PropTypes.string,
// };
