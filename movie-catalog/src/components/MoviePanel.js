
const MoviePanel = ({movie})=>{
    return (
        <div className="movie">
            <div>
                <h3>{movie.Title}</h3>
            </div>
            <div>
                <img alt="poster"
                src={movie.Poster !== 'N/A' ? movie.Poster : "https://via.placeholder.com/150?text=Sin+Portada"} />
            </div>
            <div>
                <span>{movie.Type}</span>
            </div>
        </div>
    )
}

export default MoviePanel;