import { actionTypes } from "../Actions/MoviesActionData";

const initialState = {
  moviesListData: null,
};

const movieListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MOVIE_LIST:
      return {
        ...state,
        movieListData: action.token,
      };

    default:
      return state;
  }
};

export default movieListReducer;
