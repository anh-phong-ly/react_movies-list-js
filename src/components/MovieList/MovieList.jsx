import './MovieList.scss';

export const MovieList = ({movies}) => 
(
    <div className="movies">
        {movies.map(movie => (
            <MovieCar movie={movie} key={movie.imdbId}/>
        ))}
    </div>
)
 

