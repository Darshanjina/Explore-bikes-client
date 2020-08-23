import React, { Component } from 'react'
import {connect} from 'react-redux';

import PostCard from './PostCard';

 class AllPost extends Component {
    render() {
        const {sortedList,sortCat} = this.props;

        if(sortedList !== undefined){
            return(
                <div className="row m-0 p-0">
                    <div className="col-12 mb-4">
                         <div className="text-center h3">Bikes to Explore in {sortCat.name}</div>
                    </div>
                    {
                        sortedList.map((post)=>(
                            <PostCard key={post._id} post={post}/>
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

const mapStateToProps = (state) =>({
    sortedList : state.post.sortedList,
    sortCat : state.post.sortCat
})

export default connect(mapStateToProps)(AllPost)