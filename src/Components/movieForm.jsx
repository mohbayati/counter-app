import joi from "joi-browser";
import React from "react";
import { getGenres } from "../services/fakeGenreService";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import Form from "./common/form";
class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };
  schema = {
    _id: joi.string(),
    title: joi.string().required().label("Title"),
    genreId: joi.string().required().label("Genre"),
    numberInStock: joi.number().required().label("Nunber in Stock"),
    dailyRentalRate: joi.number().required().label("Rate"),
  };
  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });
    if (this.props.params.id === "new") return;

    const id = this.props.params.id;
    const movie = getMovie(id);

    this.setState({ data: this.mapToViewModel(movie) });
  }
  mapToViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  }
  onSubmit = () => {
    const history = this.props.history;
    saveMovie(this.state.data);
    history("/movies");
  };

  render() {
    if (!this.state.data)
      return this.props.history("/not-found", { replace: true });
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Movie From </h1>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Nunber in Stock", "number")}
          {this.renderInput("dailyRentalRate", "Rate", "number")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
