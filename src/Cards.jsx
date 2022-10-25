import React from 'react'

function Card({movie}) {
    var imagesrc = movie.Poster
    if (movie.Poster === 'N/A') {
        imagesrc = 'https://fakeimg.pl/380x350/' 
    } 
    return (
        <>
        <div className='col-md-6 col-lg-4 col-sm-12 mb-5'>
            <div className='card-body'>
                <img id='movie-id' className='movie-style' src={imagesrc}/>
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