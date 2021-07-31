import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = function ({ options, onLeaveFeedback }) {
  return (
    <ul className={styles.optionList}>
      {options.map(option => (
        <li key={option} className={styles.optionItem}>
          <button
            type="button"
            className={styles[option]}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
