import React, {useState} from "react";

const Search = ({searchMovies}) => {
    const [search, setSearch] = useState('');
    const [type, setType] = useState('all');

    const onSubmit = (e) => {
        e.preventDefault()
        searchMovies(search, type)
        setSearch('')
    };

    const handleFilter = (e) => {
        setType(e.target.dataset.type)
        searchMovies(search, type)
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="row">
                <div className="col s12">
                    <input id="search"
                           type="search"
                           placeholder='search'
                           className="validate"
                           value={search}
                           onChange={(e) => setSearch(e.target.value)}
                    />
                    <div>
                        <p>
                            <label>
                                <input className="with-gap" name="type" type="radio" data-type='all'
                                       onChange={handleFilter}
                                       checked={type === 'all'}
                                />
                                <span>ALL</span>
                            </label>
                            <label>
                                <input className="with-gap" name="type" type="radio" data-type='movie'
                                       onChange={handleFilter}
                                       checked={type === 'movie'}
                                />
                                <span>Movies Only</span>
                            </label>
                            <label>
                                <input className="with-gap" name="type" type="radio" data-type='series'
                                       onChange={handleFilter}
                                       checked={type === 'series'}
                                />
                                <span>Series Only</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
        </form>

    );
};
export default Search;