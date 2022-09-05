// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const SimilarProductItem = props => {
  const {products, clickProduct} = props
  const {title, brand, id, imageUrl, rating, price} = products

  const clicked = () => {
    clickProduct(id)
  }

  return (
    <Link to={`/products/${id}`} className="links" onClick={clicked}>
      <li className="product-item">
        <img src={imageUrl} alt="similar product" className="thumbnail" />
        <h1 className="title">{title}</h1>
        <p className="brand">by {brand}</p>
        <div className="product-details">
          <p className="price">Rs {price}/-</p>
          <div className="rating-container">
            <p className="rating">{rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
        </div>
      </li>
    </Link>
  )
}
export default SimilarProductItem
