import React, { useEffect, useState } from 'react';
import './movies.css'
import axios from 'axios';

function Movies() {
    
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '001e2fe648msh0bbd4f56664c661p1fd535jsnfad27f4c92a3',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };
    const [movies, setMovies] = useState([])

    const fetchMovie = () => {
        fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
        .then(response => response.json())
        .then(data => {
            data.map((i) => {
                const Title = movies.Title;
                const Poster = movies.Poster;
                const movie = `<li><img src="${Poster}"> <h2>${Title}</h2></li>`
                document.querySelector('.movies').innerHTML += movie;
            })
            setMovies(data);
        })
        
    }
    useEffect(() => {
        fetchMovie()
    }, [])
    // function viewMovies() {
    //     axios.request(options).then(function (response) {
    //         console.log(response.data);
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
    // //     // fetch('https://moviesdatabase.p.rapidapi.com/titles/search/title/movies?info=mini_info&limit=10&page=1&titleType=movie', options)
    // //     // .then(response => response.json())
    // //     // .then(response => console.log(response))
    // //     // .catch(err => console.error(err));
    // }
    // const fetchMovie = async(searchMovie) => {
    //     const response = await fetch("http://www.omdbapi.com/?s=star&apikey=480344f1&r=json");
    //     const result = await response.json();
    //     return result;
    // }

    return (
        <>
            <div className='header'>
                <h1 id='titleM' >Movies</h1>
                <span className='search-container'>
                    <form action='/movies'>
                        <input type="text" placeholder="Search Movie..." name="search"></input>
                        <button type="submit" id='searchIcon' onClick={fetchMovie}><i class="fa fa-search"></i></button>
                    </form>
                </span>
            </div>
            <hr />
            <div className='movies'>
                {fetchMovie}
                {/* {movies.length > 0 && (
                    <ul>
                        {movies.map(movie => (

                            <li key={movie.imdbID}>{movie.Poster}{movie.Title}</li>
                        ))}
                    </ul>
                )} */}
            </div>
        </>
    )
}
export default Movies;