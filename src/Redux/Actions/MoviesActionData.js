export const actionTypes = {
  MOVIE_LIST: "MOVIE_LIST",
};

export const setMovieData = (data) => {
  return {
    type: actionTypes.MOVIE_LIST,
    token: data,
  };
};
