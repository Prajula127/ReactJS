// Write your code here

import MoviesSlider from '../MoviesSlider'

import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props

  const movie = moviesList.filter(each => each.categoryId === actionMovie)
  //   console.log(movie)
  const comedy = moviesList.filter(each => each.categoryId === comedyMovie)
  //   console.log(comedy)

  return (
    <div className="prime-video-container">
      <div className="prime-container">
        <img
          className="logo"
          alt="prime video"
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        />
      </div>
      <div className="movies-container">
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider movieSlider={movie} />
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider movieSlider={comedy} />
      </div>
    </div>
  )
}
export default PrimeVideo
