import React from 'react';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.container}>
            <span>Cryptokitties collection</span>
        </div>
    );
};

export default Header;