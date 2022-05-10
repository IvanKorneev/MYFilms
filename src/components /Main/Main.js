import React, {useEffect, useState} from "react";
import MovieList from "../Movie-list";
import Loader from "../Loader";
import Search from "../Search";

const axios = require('axios').default;

const Main = () => {
    const [movies, setMovies] = useState([]);
    console.log(movies)

    useEffect(() => {
        axios.get('http://www.omdbapi.com/?apikey=8b4ef849&s=matrix')
            .then(response => setMovies(response.data.Search))

    }, []);

    const searchMovies = (str, type) => {
        axios.get(`http://www.omdbapi.com/?apikey=8b4ef849&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => setMovies(response.data.Search))
        console.log(str,type)
    }
    return (
        <div>
            <main className='content'>
                <Search searchMovies={searchMovies}/>
                {
                    movies.length ? (
                        <MovieList movies={movies}/>
                    ) : <Loader/>
                }
            </main>

        </div>
    );
};
export default Main;