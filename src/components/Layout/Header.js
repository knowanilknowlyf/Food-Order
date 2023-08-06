import React from 'react';
import meals from '../../assets/meals.jpg'
import styles from './Header.module.css'
import HeaderCartButton from './HeaderCartButton';
const Header = ({onCartShow}) => {
    return (
        < >
            <header className={styles.header}>
                <h1>React Meals</h1>
                <HeaderCartButton  onClickCart={onCartShow}/>            </header>
            <div className={styles['main-image']}><img src={meals} alt='time to eat'></img></div>

        </>
    );
}

export default Header;
