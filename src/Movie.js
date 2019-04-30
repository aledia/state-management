import React from "react";

class Movie extends React.Component {
    render() {
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>Year: {this.props.year}</p>
                <p>Style: {this.props.style}</p>
            </div>
        )
    }
}

export default Movie;