import React from 'react';
import PropTypes from 'prop-types';
import CardItem from 'components/CardItem';
import Preloader from 'components/Preloader';
import styles from './CardList.module.scss';

const CardList = (props) => {
    const { cards, loading } = props;

    return (
        <div className={styles.container}>
            {
                cards.map(card => <CardItem key={card.id} {...card} />)
            }
            {
                loading && <Preloader />
            }

        </div>
    );
};

CardList.propTypes = {
    cards: PropTypes.array.isRequired,
    loading: PropTypes.bool
}

CardList.defaultProps = {
    loading: false
}

export default CardList;