import React from "react";
import {connect} from 'react-redux';
import {data} from '../data';
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import {addMovies , setShowFavourites} from '../actions';
// import {connect} from '../index';

 
class App extends React.Component {

  // componentDidMount () {
  //   const {store} = this.props;
  //   store.subscribe(() => {
  //     console.log('UPDATED');
  //     this.forceUpdate();
  // })
  //   //make api call
  //   //dispatch action

  //   // store.dispatch({
  //   //   type: 'ADD_MOVIES',
  //   //   movies: data
  //   // });

  //   store.dispatch(addMovies(data));

  //   console.log('STATE' , this.props.store.getState());
  // }


  componentDidMount() {
    this.props.dispatch(addMovies(data));
  }

  isMovieFavourite = (movie) => {
    // const {favourites} = this.props.store.getState();
    // const {movies} = this.props.store.getState();
    const {movies} = this.props;

    const index = movies.favourites.indexOf(movie);

    if(index !== -1){
      //found the movie
      return true;
    }
    return false;
}

onChangeTab = (val) => {
  this.props.dispatch(setShowFavourites(val))
}

  render() {
    
    // const movies = this.props.store.getState();  //{liist: [] , favourites: []}
    // const {list , favourites , showFavourites} = this.props.store.getState();  //{liist: [] , favourites: []}

    // const {movies , search} = this.props.store.getState();
    const {movies , search} = this.props;
    const {list , favourites , showFavourites} = movies;  //{movies: {} , search: {}}
  
    console.log('RENDER' , this.props);

    const displayMovies = showFavourites ? favourites : list;


      return(
      <div className="App">
      <Navbar search = {search}/>

      <div className="main">
        <div className="tabs">
          <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
          <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick={() => this.onChangeTab(true)}>Favourites</div>
        </div>

        <div className="list">
          {displayMovies.map((movie , index) => (
            <MovieCard
             movie={movie} 
             key={`movies-${index}`}
              dispatch={this.props.dispatch}
              isFavourite = {this.isMovieFavourite(movie)}
               />
          ))}
        </div>
              {displayMovies.length === 0 ? <div className="no-movies">No Movies to Show!</div> : null }
      </div>
    </div>
 
      ) 
    }
}

// class AppWrapper extends React.Component{
//   render(){
//     return(
//       <StoreContext.Consumer>
//       {(store) => <App store={store}/>}
//       </StoreContext.Consumer>
//     )
//   }
// }

 function mapStateToProps(state){
  return {
    movies: state.movies,
    search: state.movies
  }
 }

 const ConnectedAppComponent = connect(mapStateToProps)(App);

export default ConnectedAppComponent;
