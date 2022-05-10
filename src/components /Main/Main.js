import React, {useEffect, useState} from "react";
import MovieList from "../Movie-list";
const axios = require('axios').default;

const Main = () => {
    const [movies, setMovies] = useState([]);
    console.log(movies)

    useEffect(() => {
        axios.get('http://www.omdbapi.com/?apikey=8b4ef849&s=matrix')
            .then(response => setMovies(response.data.Search)).catch(function (error) {
            console.log(error);
        })
    },[])
    return (
        <div>
            <main className='content'>
                {
                    movies.length ? (
                        <MovieList movies={movies}/>
                    ) : <h4>Loading...</h4>
                }
            </main>

        </div>
    );
};
export default Main;