import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Headers extends Component {
    render() {
        return (
            <div className="container-fluid bgGrad">
                <div className="container p-3">
                <Link to="/" className="text-light text-decoration-none">
                    Explore Bikes.
                </Link>
                <div className="d-inline-block float-right">
                    <Link to="/" className="text-light text-decoration-none">Home</Link>
                    <Link to="/allPost" className="ml-3 text-light text-decoration-none">Articles</Link>
                </div>
                </div>
            </div>
        )
    }
}
