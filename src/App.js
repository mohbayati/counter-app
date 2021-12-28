import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import BootsNavBar from "./Components/bootsNavBar";
import Costomers from "./Components/costumers";
import LoginForm from "./Components/loginForm";
//import MovieForm from "./Components/movieForm";
import MovieFormWrapper from "./Components/movieFormWrapper";
// import Counters from "./Components/counters";
import Movies from "./Components/movies";
// import Navbar from "./Components/Navbar";
import NotFound from "./Components/not-Found";
import RegisterForm from "./Components/registerForm";
import Rentals from "./Components/rentals";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleDelete = (id) => {
    const counters = this.state.counters.filter((c) => c.id !== id);
    this.setState({ counters });
  };
  handleIncriment = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value = counter.value + 1;
    this.setState({ counters });
  };
  handleDecriment = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    if (counters[index].value > 0) counters[index].value = counter.value - 1;
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          {/* <Navbar
          totalCounter={this.state.counters.filter((c) => c.value > 0).length}
        /> */}
          <BootsNavBar />
          <main className="container">
            {/* <Counters
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncriment={this.handleIncriment}
            onDecriment={this.handleDecriment}
            counters={this.state.counters}
          /> */}
            <Routes>
              <Route path="/login" element={<LoginForm />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/:id" element={<MovieFormWrapper />} />
              <Route path="/costumers" element={<Costomers />} />
              <Route path="/rentals" element={<Rentals />} />
              <Route path="/not-found" element={<NotFound />} />
              <Route
                path="/register"
                element={<RegisterForm to="/register" />}
              />
              <Route path="/" element={<Navigate to="/movies" />} />
              <Route path="*" element={<Navigate to="/not-found" />} />
            </Routes>
          </main>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
