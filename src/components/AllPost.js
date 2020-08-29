import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getAllPost} from '../action/postAction';

import PostCard from './PostCard';

 class AllPost extends Component {

    componentDidMount(){
        this.props.getAllPost();
    }
    render() {
        const {postList} = this.props;

        if(postList !== undefined ){
            return(
                <div className="row m-0 p-0">
                    <div className="col-12 mb-4">
                        <div className="text-center h3"><i className="fa fa-motorcycle mr-3" aria-hidden="true"></i>All Bikes To Explore<i className="fa fa-motorcycle ml-3" aria-hidden="true"></i></div>
                    </div>
                    {
                        postList.map((post)=>(
                            <PostCard key={post._id} post={post} />
                        ))
                    }
                </div>
            )
        }

        else{
            return (
                <h2 className="text-center text-danger">Error .......</h2>
            )
        }

    }
}

const mapStateToProps = (state) => ({
    postList : state.post.postList
})

export default connect(mapStateToProps,{getAllPost})(AllPost)
