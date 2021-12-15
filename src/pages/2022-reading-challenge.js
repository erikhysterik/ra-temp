import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const ChallengePage = () => (
  <Layout>
    <h1>2022 Reading Challenges</h1>
    <p>Available as a downloadable PDF</p>
    <p>
      <a href = {"/2022_Reading_Challenges.pdf"} target="_blank" rel="noopener noreferrer">Download</a>
    </p>
    <p>
      <Link to="/">Back to Home</Link>
    </p>
  </Layout>
)

export default ChallengePage