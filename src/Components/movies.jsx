import React from "react";
import { getMovies } from "./../services/fakeMovieService";
import Like from "./Like";
import Pagination from "./pagination";
import { paginate } from "./utils/paginate";

class Movies extends React.Component {
  state = { movies: getMovies(), pageSize: 4, currentPage: 1 };

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
  render() {
    const { movies: allMovies, pageSize, currentPage } = this.state;

    const movies = paginate(allMovies, currentPage, pageSize);

    if (movies.length === 0)
      return (
        <main className="container">
          <h3>there is no movies in the database</h3>{" "}
        </main>
      );
    return (
      <main className="container">
        <h3>showing {allMovies.length} movies in the database</h3>
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
          itemCount={allMovies.length}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </main>
    );
  }
}

export default Movies;
