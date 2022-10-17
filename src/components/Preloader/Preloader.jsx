import React from 'react';
import styles from './Preloader.module.scss';

const Preloader = () => {

    return (
        <div className={styles.container}>
            <div className={styles.lds__spinner}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Preloader;