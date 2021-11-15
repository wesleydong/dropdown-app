import React from 'react';
import styles from './App.module.scss';
import { Dropdown } from '../components/Dropdown';

function App() {
  const options = ['New York', 'Los Angeles', 'San Francisco', 'Las Vegas', 'Seattle', 'Phoenix', 'Denver'];
  return (
    <div className="App">
      <header className={styles.appHeader}>
        <Dropdown options={options} />
      </header>
    </div>
  );
}

export default App;
