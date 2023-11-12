import React from "react";
import "../css/Detail.css"

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
        history.push("/");
        }
    }
    render() {
        const { location } = this.props;
        
        if (location.state) {
        return (
            <div className="detail_movie">
                <h3 className="movie_title">{location.state.title}</h3>
                <img src={location.state.img} alt={location.state.title} title={location.state.title}/>
                <h5 className="movie_year">{location.state.year}</h5>
                <ul className="movie_genres">
                    {location.state.genres.map((genre, index) => (
                    <li key={index} className="genres_genre">{genre}</li>
                    ))}
                </ul>
                <p className="movie_summary">{location.state.summary}</p>
                
            </div>
        )
        } else {
        return null;
        }
    }
}
export default Detail;