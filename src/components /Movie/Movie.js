import React from "react";
const Movie = ({movie}) => {
    const {Title: title, Year: year, imdbID: id, Type: type, Poster: poster} = movie;

    return (
        <div>
            <div id={id} className="card movie">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        poster === 'N/A'?
                            <img className="activator" src={`https://via.placeholder.com/350x400?text=${title}`}/>
                            :
                            <img className="activator" src={poster}/>
                    }
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{title}<i
                        className="material-icons right">more_vert</i></span>
                    <p>{year} <span className='right'>{type}</span></p>
                </div>
            </div>
        </div>
    );
};
export default Movie;