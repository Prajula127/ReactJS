// Write your code here

import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import {BsDashSquare, BsPlusSquare} from 'react-icons/bs'
import SimilarProductItem from '../SimilarProductItem'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class ProductItemDetails extends Component {
  state = {
    similarProductsList: [],
    apiStatus: apiStatusConstants.initial,
    count: 1,
    id: '',
  }

  componentDidMount() {
    this.getSimilarProducts()
  }

  getSimilarProducts = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')

    console.log(id)
    this.setState(prevState => ({id: prevState.id}))
    const url = `https://apis.ccbp.in/products/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      const updateProducts = {
        id: data.id,
        imageUrl: data.image_url,
        title: data.title,
        price: data.price,
        description: data.description,
        brand: data.brand,
        totalReviews: data.total_reviews,
        rating: data.rating,
        availability: data.availability,
        similarProducts: data.similar_products.map(each => ({
          id: each.id,
          imageUrl: each.image_url,
          title: each.title,
          style: each.style,
          price: each.price,
          description: each.description,
          brand: each.brand,
          totalReviews: each.total_reviews,
          rating: each.rating,
          availability: each.availability,
        })),
      }
      this.setState({
        similarProductsList: updateProducts,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onDecrement = () => {
    const {count} = this.state
    if (count > 1) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  clickProduct = id => {
    this.setState({id}, this.getSimilarProducts)
  }

  getProductDetailInfo = () => {
    const {similarProductsList, count} = this.state
    const {similarProducts} = similarProductsList

    return (
      <div className="product-details-container">
        <div className="products-details">
          <img
            className="product-image"
            alt="product"
            src={similarProductsList.imageUrl}
          />
          <div className="product-info-container">
            <h1 className="product-title">{similarProductsList.title}</h1>
            <p className="product-price">Rs {similarProductsList.price}/-</p>
            <div className="ratings-info-container">
              <div className="rating-container rating-card">
                <p className="rating">{similarProductsList.rating}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                  alt="star"
                  className="star"
                />
              </div>
              <p className="total-rating">
                {similarProductsList.totalReviews} Reviews
              </p>
            </div>
            <p className="product-desc">{similarProductsList.description}</p>
            <p className="count">
              Available:
              <span className="count sub">
                {similarProductsList.availability}
              </span>
            </p>
            <p className="count">
              Brand:
              <span className="count sub">{similarProductsList.brand}</span>
            </p>
            <hr className="line" />
            <div className="inc-dec-container">
              <button
                className="inc-dec"
                type="button"
                onClick={this.onIncrement}
              >
                <BsPlusSquare className="inc-dec-icons" />
              </button>
              <p className="count counts">{count}</p>
              <button
                className="inc-dec dec"
                type="button"
                onClick={this.onDecrement}
              >
                <BsDashSquare className="inc-dec-icons" />
              </button>
            </div>
            <button className="shop-now-button" type="button">
              ADD TO CART
            </button>
          </div>
        </div>
        <h1 className="products-list-heading">All Products</h1>
        <ul className="products-list">
          {similarProducts.map(each => (
            <SimilarProductItem
              key={each.id}
              products={each}
              clickProduct={this.clickProduct}
            />
          ))}
        </ul>
      </div>
    )
  }

  //

  renderLoader = () => (
    <div className="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </div>
  )

  getProductFail = () => (
    <div className="cart-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        alt="failure view"
        className="error-img"
      />
      <h1 className="product-failure-heading-text">Product Not Found</h1>
      <Link to="/products">
        <button type="button" className="shop-now-button">
          Continue Shopping
        </button>
      </Link>
    </div>
  )

  render() {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case 'SUCCESS':
        return this.getProductDetailInfo()
      case 'IN_PROGRESS':
        return this.renderLoader()
      case 'FAILURE':
        return this.getProductFail()
      default:
        return null
    }
  }
}
export default ProductItemDetails
