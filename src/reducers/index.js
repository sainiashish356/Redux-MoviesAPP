import { ADD_MOVIES, ADD_FAVOURITE  ,REMOVE_FROM_FAVOURITES ,SET_SHOW_FAVOURITES} from "../actions";

const initialMovieState = {
  list: [],
  favourites: [],
  showFavourites: false
};

export function movies(state = initialMovieState, action) {
//   if(action.type === ADD_MOVIES){
//   return {
//        ...state,
//        list: action.movies
//   };
//   }
//   return state;

  console.log('MOVIES REDUCER');
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list : action.movies
      }
    case ADD_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      }

      case REMOVE_FROM_FAVOURITES:
        const filterdArray = state.favourites.filter(
          movie => movie.Title != action.movie.Title
        );
        return {
          ...state,
          favourites: filterdArray
        }

        case SET_SHOW_FAVOURITES: 
        return {
          ...state,
          showFavourites: action.val
        }

    default:
      return state;
  }
}


const initialSearchState = {
  result: {}
};

export function search (state = initialSearchState , action){
  console.log('SEARCH REDUCER');

    return state;
};

const initialRootState = {
  movies: initialMovieState,
  search: initialSearchState
};

export default  function rootReducer(state = initialRootState , action){
  return {
    movies: movies(state.movies , action),
    search: search(state.search , action)
  }
};