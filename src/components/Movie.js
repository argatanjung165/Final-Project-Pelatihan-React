import React from 'react'



const Movie = (props) => {
    return (
        <>
            <div className="movies">
                {props.movies != undefined ? props.movies.map((movie, index) => (
                    <>
                        <div className='movie'>
                            <p>{movie.Title}</p>
                            <div> <img src={movie.Poster} alt="No Image"></img></div>

                        </div>
                    </>
                )) : <div>No result</div>}
            </div>
        </>
    )
}

export default Movie