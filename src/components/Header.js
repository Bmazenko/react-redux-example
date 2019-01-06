import React, { Component } from 'react'

class Header extends Component {

  render() {
console.log(window.location.pathname);
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <a className="navbar-brand" href="#">React with Redux and Bootstrap</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className={"nav-item nav-link " + (window.location.pathname==="/" ? "active": "")}  href="/">Home</a>
                <a className={"nav-item nav-link " + (window.location.pathname==="/about" ? "active": "")} href="/about">About</a>
                <a className={"nav-item nav-link " + (window.location.pathname==="/items" ? "active": "")} href="/items">Items</a>
            </div>
        </div>
        </nav>
    )
  }
}

export default Header;
