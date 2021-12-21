import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const MovieForm = () => {
  const params = useParams();
  const history = useNavigate();
  return (
    <div>
      <h1>Movie From {params.id}</h1>
      <button className="btn btn-primary" onClick={() => history("/movies")}>
        save
      </button>
    </div>
  );
};

export default MovieForm;
