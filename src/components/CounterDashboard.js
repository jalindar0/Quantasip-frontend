import React from 'react';
import CountUp from 'react-countup';
import styles from './CounterDashboard.module.css';

const counters = [
  { label: 'Happy Users', value: 5000 },
  { label: 'Trusted Clients', value: 200 },
  { label: 'Projects Completed', value: 300 },
  { label: 'Cities Covered', value: 150 },
];

const CounterDashboard = () => {
  return (
    <div className={styles.dashboardGrid}>
      {counters.map((counter, index) => (
        <div key={index} className={styles.counterCard}>
          <div className={styles.counterValue}>
            <CountUp start={0} end={counter.value} duration={2} separator="," />
          </div>
          <div className={styles.counterLabel}>{counter.label}</div>
        </div>
      ))}
    </div>
  );
};

export default CounterDashboard;
