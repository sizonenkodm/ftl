import axios from 'axios';

const request = axios.create({
    baseURL: 'https://ftl-cryptokitties.fly.dev/api/crypto_kitties',
    headers: {
        'Content-type': 'application/json',
    }
});

export const showCards = (currentPage = 1, sort = '') => {
    if (sort) {
        const _sort = sort.split(' ');
        return request.get(`?sort_by=${_sort[0]}&sort_dir=${_sort[1]}&page=${currentPage}&per_page=20`)
    } else {
        return request.get(`?page=${currentPage}&per_page=20`);
    }
}