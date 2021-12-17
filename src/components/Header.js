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
        <h3>
          Welcome, home library lovers!
        </h3>
        <p>Click the book above &amp; download all 5 of our 2022 Reading Challenges for kids, teens, adults, and families!</p>
        <p>Join our <a href="https://www.facebook.com/groups/350895429031188">RA Reads</a> group for inspiration and encouragement throughout the year!</p>
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
