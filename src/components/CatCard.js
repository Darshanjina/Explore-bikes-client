import React, { Component } from 'react'

export default class CatCard extends Component {

    SetBikes(bike){
        console.log(bike);
        this.props.SortPost(bike);
    }
    render() {
        const {name , img_name , meta_title , meta_desc} = this.props.category;
        return (
            <div className="col-md-4 mb-3 py-2 px-3">
                <div className="card bg-light ccard">
                    <img className="card-img-top ccardimg" src={require(`../uploads/${img_name}`) } alt={name} />
                    <div className="card-text p-3">
                        <div className="h3 mt-2 mb-3 purpletxt">{name}</div>
                        <div className="my-4 h6 text-secondary">
                            {meta_desc.slice(0,85)}.......
                        </div>
                        <div className="mt-3 text-right">
                            <button className="btn purpletxt" onClick={this.SetBikes.bind(this,meta_title)}>Explore {name}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
