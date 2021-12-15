import React from "react"

class RedirectHome extends React.Component {
    componentDidMount() {
      console.log('Check 101')
      typeof window !== "undefined" && window.gtag("event", "exception", { description: this.props.target })
      setTimeout(() => {if (typeof window !== 'undefined') window.location = '/'}, 1500)
    }
    render() {
      return (
        <div>
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      )
    }
  }
  export default RedirectHome