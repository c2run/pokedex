
import styles from './header.module.css';

const Header = () => {
    return (
      <header className={styles.header}>
        <input className={styles.input}
         placeholder='Buscar pokemon' 
         type="text" />
      </header>
    );
  };

export default Header;