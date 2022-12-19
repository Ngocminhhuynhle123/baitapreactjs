import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div className="card col-md-4">
                <img className="card-img-top" src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_960_720.png" alt='img' />
                <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                </div>
                <button type="button" className="btn btn-primary">Get</button>
            </div>
        )
    }
}
