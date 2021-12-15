import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
       <span className="icon fa-book"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Reshelving Alexandria</h1>
        <p>
          Stay tuned!
        </p>
        <p>2022 Reading Challenge Now available</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <Link to="/2022-reading-challenge">
          2022 Reading Challenge
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
