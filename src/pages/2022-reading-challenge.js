import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ChallengePage = () => (
  <Layout>
    <h1>2022 Reading Challenges</h1>
    <p>Available as a downloadable PDF</p>
    <div>
      <a href = {"/2022_Reading_Challenge.pdf"} target="_blank" rel="noopener noreferrer">Reading Challenge</a>
    </div>
    <div>
      <a href = {"/2022_52_Reading_Challenge.pdf"} target="_blank" rel="noopener noreferrer">52 Book Reading Challenge</a>
    </div>
    <div>
      <a href = {"/2022_Teen_Reading_Challenge.pdf"} target="_blank" rel="noopener noreferrer">Teen Reading Challenge</a>
    </div>
    <div>
      <a href = {"/2022_Kids_Reading_Challenge.pdf"} target="_blank" rel="noopener noreferrer">Kids Reading Challenge</a>
    </div>
    <p>
    </p>
    <Link to="/">Back to Home</Link>
  </Layout>
)

export default ChallengePage