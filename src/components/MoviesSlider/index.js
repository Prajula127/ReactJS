// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movieSlider} = props

  //   console.log(movieSlider)
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <>
      <Slider {...settings}>
        {movieSlider.map(each => (
          <MovieItem key={each.id} movieItems={each} />
        ))}
      </Slider>
    </>
  )
}
export default MoviesSlider
