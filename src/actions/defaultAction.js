export const fetchDefaults = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(items => 
            dispatch({
                type: 'FETCH_DEFAULTS',
                payload: items
            })
        );
};