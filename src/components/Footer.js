import React from 'react'

export default function Footer() {
  return (
    <footer className="text-muted">
      <div className="container">
        <p className="float-right">
          Back to top
                </p>
        <p>Album example is © Bootstrap, but please download and customize it for yourself!</p>
        <p>New to Bootstrap?{" "}
          <a href="https://getbootstrap.com/docs/4.0/">
            Visit the homepage
          </a>
          {" "}or read our{" "}
          <a href="https://getbootstrap.com/docs/4.0/getting-started/">
            getting started guide
          </a>
          .
        </p>
      </div>
    </footer>
  )
}
