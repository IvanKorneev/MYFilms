import React, {useState} from "react";

const Search = ({searchMovies}) => {
    const [search, setSearch] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
        searchMovies(search)
        setSearch('')
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
                </div>
            </div>
        </form>

    );
};
export default Search;