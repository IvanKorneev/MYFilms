import React, {useEffect, useState} from "react";
import MovieList from "../Movie-list";
import Loader from "../Loader";
import Search from "../Search";

const axios = require('axios').default;

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://www.omdbapi.com/?apikey=8b4ef849&s=matrix')
            .then(response => {
                setMovies(response.data.Search)
                setLoading(false)
            });

    }, []);

    const searchMovies = (str, type) => {
        setLoading(true);
        axios.get(`http://www.omdbapi.com/?apikey=8b4ef849&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => setMovies(response.data.Search));
        setLoading(false)


    }
    return (
        <div>
            <main className='content'>
                <Search searchMovies={searchMovies}/>
                {
                    loading ? (
                        <Loader/>
                    ) : <MovieList movies={movies}/>
                }
            </main>

        </div>
    );
};
export default Main;