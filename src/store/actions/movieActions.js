import axios from "axios"

export const fetchMoviesBySearch = (searchValue) => {

    return (dispatch) => {
        axios({
            method: 'get',
            url: `http://www.omdbapi.com/?s=${searchValue}&apikey=dd72a2ec`,
        })
            .then(({ data }) => {
                dispatch({
                    type: "FETCH MOVIES BY SEARCH",
                    payload: data.Search,
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }
}

export const setLoading = () => {
    return {
        type: "LOADING"
    };
};

// export const fetchMovies = () => {
//     return (dispatch) => {
//         axios({
//             method: 'get',
//             url: `http://www.omdbapi.com/?s=man&apikey=263d22d8`,
//         })
//             .then(({ data }) => {
//                 dispatch({
//                     type: "FETCH MOVIES",
//                     payload: data.Search,
//                 })
//                 console.log(data)
//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//     }
// }
