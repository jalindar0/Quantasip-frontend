import React from 'react';
import CountUp from 'react-countup';
import styles from './CounterDashboard.module.css';

const counters = [
  { label: 'Total GeoKYC Processed', value: 1561427 },
  { label: 'Area Covered (Sq.km.)', value: 2198965.5678 },
  { label: 'LGD Covered (%)', value: 90 },
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
