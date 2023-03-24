   import Pokedex from "../assets/pokedex.png";
   import styles from './loadingScreen.module.css';
   const LoadingScreen = () => {
    return (
      <div className={styles.loadingScreen}>
        <img src={Pokedex} alt="Pokedex" className={styles.loadingScreenIcon} />
        </div>
    )
    };

    export default LoadingScreen;

