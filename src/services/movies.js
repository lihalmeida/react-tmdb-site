const API_KEY = 'be4d0e7bc5426408b065a1d808a075b4';

export const requestById = (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
    // const windowUrl = `/?id=${id}`;

    // if (withPushState) {
    //     window.history.pushState(null, '', windowUrl);
    // };
    
    return request(url)
}

export const requestByQuery = (query) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`;
    // const windowUrl = `/?query=${encodeURIComponent(query)}`;

    // if (withPushState) {
    //     window.history.pushState(null, '', windowUrl);
    // };

    return request(url)
};

const request = (url) => {
    return fetch(url)
        .then((response) => response.json());
};