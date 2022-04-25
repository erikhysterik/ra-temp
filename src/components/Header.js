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
        <p>Use of our Amazon affiliate link helps support making this project free to the public, many thanks.</p>
      </div>
    </div>
    
    <ul className="icons">
            <li>
              <a href="https://instagram.com/reshelvingalexandria?igshid=YmMyMTA2M2Y=" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/groups/1822973164691357" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://amzn.to/3K8is3v"
                className="icon fa-amazon"
              >
                <span className="label">Amazon Affiliate</span>
              </a>
            </li>
        </ul>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
