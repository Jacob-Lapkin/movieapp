import React from 'react'

function Card({movie}) {
    return (
        <>
        <div className='col-md-6 col-lg-4 col-sm-12 mb-5'>
            <div className='card-body'>
                <img className='movie-style' src={movie.Poster}/>
                <div className='card-footer'>
                    <p className='card-type'>
                        {movie.Type}
                    </p>
                    <p className='card-title'>
                        {movie.Title} ({movie.Year})
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card