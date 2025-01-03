'use client';
import LoginForm from '../../components/LoginForm';
import styles from '../styles/page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>Dracarys search</h2>
      <LoginForm />
    </div>
  );
}

    
