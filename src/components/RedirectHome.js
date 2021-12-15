import React from "react"

class RedirectHome extends React.Component {
    componentDidMount() {
      typeof window !== "undefined" && window.gtag("event", "exception", { description: "404" })
      setTimeout(() => {if (typeof window !== 'undefined') window.location = '/'}, 2500)
    }
    render() {
      return (
        <div>
            <h1>Nothing Here</h1>
            <p>Let's go galumphing back...</p>
        </div>
      )
    }
  }
  export default RedirectHome