import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardItem.module.scss';

const CardItem = (props) => {
    const { name, category, price, image_url } = props;

    return (
        <div className={styles.card}>
            <div className={styles.card__price}>Price: <b>{price}</b></div>
            <img className={styles.card__img} src={image_url} alt="cryptokitties_img" />
            <div className={styles.card__info}>
                <span>name: <b>{name}</b></span>
                <span>category: <b>{category}</b></span>
            </div>
        </div >
    );
};

CardItem.propTypes = {
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
}

export default CardItem;