import PropTypes from 'prop-types'
import React from 'react'

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
      </div>
    </div>
    <div className="logo">
      <a href = "https://www.facebook.com/groups/1822973164691357"><i className="icon fa-facebook-square"></i></a>
    </div>

  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
