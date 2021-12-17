import React from "react";
import { getMovies } from "./../services/fakeMovieService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import { getGenres } from "./../services/fakeGenreService";
import _ from "lodash";

class Movies extends React.Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };

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
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: [{ _id: "", name: "All Genres" }, ...getGenres()],
    });
  }
  handleGenerSelecte = (item) => {
    this.setState({
      selectedGenre: item,
      currentPage: 1,
    });
  };
  getPageData = () => {
    const {
      movies: allMovies,
      pageSize,
      currentPage,

      selectedGenre,
      sortColumn,
    } = this.state;
    const filters =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filters, [sortColumn.path], [sortColumn.order]);
    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filters.length, data: movies };
  };
  render() {
    const { pageSize, currentPage, genres, selectedGenre } = this.state;
    const { totalCount, data } = this.getPageData();
    if (data.length === 0)
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
            <h3>showing {totalCount} movies in the database</h3>
            <hr />
            <MoviesTable
              movies={data}
              onDelete={this.handleDelete}
              onClick={this.handleLike}
              onSort={this.handleSort}
              sortColumn={this.state.sortColumn}
            />
            <Pagination
              itemCount={totalCount}
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
