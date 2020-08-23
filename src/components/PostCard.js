import React, { Component } from 'react'

export default class PostCard extends Component {
    render() {
        const {title , cat_name , meta_desc , img_name} = this.props.post;
        return (
            <div className="col-md-4 mb-3 py-2 px-3">
                <div className="card ccard">
                    <img className="card-img-top pcardimg" src={require(`../uploads/${img_name}`)} alt={title} />
                    <div className="card-text p-3">
                         <div className="h3 mt-2 mb-3 purpletxt">{title}</div>
                         <div className="my-3 h6 text-secondary">
                         <i className="fa fa-map-marker purpletxt"></i> {cat_name}
                         </div>
                         <div className="mt-4 mb-2 h6 text-secondary">
                             {meta_desc.slice(0,50)}...<span className="purpletxt">Know more</span>
                         </div>
                    </div>
                </div>     
            </div>
        )
    }
}
