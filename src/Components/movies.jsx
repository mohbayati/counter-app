import React from "react";
import { getMovies } from "./../services/fakeMovieService";
import Like from "./common/Like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/ListGroup";
import { getGenres } from "./../services/fakeGenreService";

class Movies extends React.Component {
  state = { movies: [], genres: [], pageSize: 4, currentPage: 1 };

  handleDelete = (movie) => {
    this.setState({
      movies: this.state.movies.filter(
        (movieState) => movieState._id !== movie._id
      ),
    });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState(movies);
  };
  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: [{ name: "All Genres" }, ...getGenres()],
    });
  }
  handleGenerSelecte = (item) => {
    this.setState({
      selectedGenre: item,
      currentPage: 1,
    });
  };
  render() {
    const {
      movies: allMovies,
      pageSize,
      currentPage,
      genres,
      selectedGenre,
    } = this.state;
    const filters =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;
    const movies = paginate(filters, currentPage, pageSize);

    if (movies.length === 0)
      return (
        <main className="container">
          <h3>there is no movies in the database</h3>{" "}
        </main>
      );
    return (
      <main className="container">
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={genres}
              selectedItem={selectedGenre}
              onItemSelect={this.handleGenerSelecte}
            />
          </div>
          <div className="col">
            <h3>showing {filters.length} movies in the database</h3>
            <hr />
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie) => (
                  <tr key={movie._id}>
                    <td>{movie.title} </td>
                    <td>{movie.genre.name} </td>

                    <td>{movie.numberInStock} </td>
                    <td>{movie.dailyRentalRate} </td>
                    <td>
                      <Like
                        onClick={() => this.handleLike(movie)}
                        Liked={movie.liked}
                      />
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => this.handleDelete(movie)}
                      >
                        Delete
                      </button>{" "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              itemCount={filters.length}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default Movies;
