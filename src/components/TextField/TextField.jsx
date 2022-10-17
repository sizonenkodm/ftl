import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextField.module.scss';

const TextField = (props) => {
    const { type, placeholder, search, setSearch } = props;

    return (
        <input
            className={styles.input}
            type={type}
            value={search}
            placeholder={placeholder}
            onChange={(event) => setSearch(event.target.value)}
        />
    );
};

TextField.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    search: PropTypes.string,
    setSearch: PropTypes.func.isRequired
}

TextField.defaultProps = {
    type: 'text',
    placeholder: 'Search',
    search: ''
}

export default TextField;