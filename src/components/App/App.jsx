import React, { useState, useEffect } from 'react';
import { showCards } from 'utils/axios_utils';
import useLocalStorage from 'hooks/useLocalStorage';
import Header from 'components/Header';
import TextField from 'components/TextField';
import Select from 'components/Select';
import CardList from 'components/CardList';
import styles from './App.module.scss';

function App() {
	const [cards, setCards] = useState([]);
	const [fetching, setFetching] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalCount, setTotalCount] = useState(0);
	const [search, setSearch] = useState('');
	const [sort, setSort] = useLocalStorage('sort', '');
	const [category, setCategory] = useLocalStorage('category', '');

	const sortingOptions = [
		{ value: '', label: 'Not sorted' },
		{ value: 'name asc', label: 'Sort by name A-Z' },
		{ value: 'name desc', label: 'Sort by name Z-A' },
		{ value: 'category asc', label: 'Sort by category A-Z' },
		{ value: 'category desc', label: 'Sort by category Z-A' },
		{ value: 'price asc', label: 'Sort by price up' },
		{ value: 'price desc', label: 'Sort by price down' },
	];

	const categoryOptions = [
		{ value: '', label: 'Category' },
		{ value: 'slow', label: 'slow' },
		{ value: 'middle', label: 'middle' },
		{ value: 'fast', label: 'fast' },
		{ value: 'sub-zero', label: 'sub-zero' },
	];

	const scrollHandler = (event) => {
		if ((event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 200) && cards.length < totalCount) {
			setFetching(true);
		}
	}

	useEffect(() => {
		localStorage.setItem('sort', sort);
		localStorage.setItem('category', category);
		setCards([]);
		setCurrentPage(1);
		setFetching(true);
	}, [sort, category]);

	useEffect(() => {
		setFetching(true);
	}, [search]);

	useEffect(() => {
		if (fetching) {
			showCards(currentPage, sort)
				.then(response => {
					if (category) {
						setCards(prevState => [...prevState, ...response.data.cats].filter(el => el.category === category).filter(el => el.name.toLowerCase().includes(search.toLowerCase())))
					} else {
						setCards(prevState => [...prevState, ...response.data.cats].filter(el => el.name.toLowerCase().includes(search.toLowerCase())))
					}
					setCurrentPage(prevState => prevState + 1);
					setTotalCount(response.data.pagination_info.total);
				})
				.finally(() => setFetching(false));
		}
	}, [fetching]);

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler);

		return function () {
			document.removeEventListener('scroll', scrollHandler);
		}
	}, [totalCount, cards]);

	return (
		<div className={styles.App}>
			<Header />
			<div className={styles.container}>
				<TextField
					type='text'
					placeholder='Search by name...'
					search={search}
					setSearch={setSearch}
				/>
				<div className={styles.App__selects}>
					<Select
						options={sortingOptions}
						sort={sort}
						setSort={setSort}
					/>
					<Select
						options={categoryOptions}
						sort={category}
						setSort={setCategory}
					/>
				</div>
				<CardList cards={cards} loading={fetching} />
			</div>
		</div>
	);
}

export default App;