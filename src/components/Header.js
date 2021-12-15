import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
       <Link className="icon fa-book" to="/2022-reading-challenge"></Link>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Reshelving Alexandria</h1>
        <p>
          Stay tuned!
        </p>
        <p>2022 Reading Challenge now available, follow the book!</p>
      </div>
    </div>
    <div className="logo">
       <a href = "https://www.facebook.com/groups/1822973164691357">
          <i className="icon fa-facebook-square"></i>
       </a>
    </div>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
