import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode} border-bottom border-body `}>
            <div className={`container-fluid`}>
                <a className={`navbar-brand text-${props.mode === "light" ? "black":"white"}`} href="/">{props.title}</a>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                    <div className={`form-check form-switch text-${props.mode === "light" ? "black":"white"}`}>
                        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
                    </div>
                {/* </div> */}
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string,
}