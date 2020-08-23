import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getAllCategory , getSortedPost} from '../action/postAction';

import CatCard from './CatCard';

 class Home extends Component {

    SortPost=(bike)=>{
        this.props.getSortedPost(bike);
        this.props.history.push('/sortPost')
    }

    componentDidMount(){
        this.props.getAllCategory();
    }

    render() {
        const {categoryList} = this.props;

        if(categoryList !== undefined){
            return (
                <div className="row m-0 p-0">
                    <div className="col-12 mb-4">
                        <div className="text-center h3"><i class="fa fa-motorcycle mr-3" aria-hidden="true"></i>Bikes To Explore<i class="fa fa-motorcycle ml-3" aria-hidden="true"></i></div>
                    </div>
                    {
                        categoryList.map((category)=>(
                            <CatCard Key={category._id} category={category} SortPost={this.SortPost}/>
                        ))
                    }
                </div>
            )
        }

        else{
            return(
                <h2 className="text-center text-danger">Error ......</h2>
            )
        }

    }
}

const mapStateToProps = (state) =>({
    categoryList : state.post.categoryList
})

export default connect (mapStateToProps,{getAllCategory,getSortedPost})(Home)