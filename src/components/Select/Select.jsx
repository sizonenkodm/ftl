import React from 'react';
import PropTypes from 'prop-types';
import styles from './Select.module.scss';

const Select = (props) => {
    const { options, sort, setSort } = props;

    return (
        <select
            className={styles.select}
            value={sort}
            onChange={(event) => setSort(event.target.value)}
        >
            {
                options.map(option => (
                    <option value={option.value} key={option.value}>
                        {option.label}
                    </option>
                ))
            }
        </select>
    );
};

Select.propTypes = {
    options: PropTypes.array.isRequired,
    sort: PropTypes.string,
    setSort: PropTypes.func.isRequired
}

Select.defaultProps = {
    sort: ''
}

export default Select;