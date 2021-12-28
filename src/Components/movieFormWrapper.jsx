import { useNavigate, useParams } from "react-router-dom";
import MovieForm from "./movieForm";

const MovieFormWrapper = (props) => {
  const history = useNavigate();
  const params = useParams();

  return <MovieForm history={history} params={params} {...props} />;
};

export default MovieFormWrapper;
