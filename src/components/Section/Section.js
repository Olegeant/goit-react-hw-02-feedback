import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

import Container from '../Container/Container';

const Section = function ({ title, children }) {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </Container>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
