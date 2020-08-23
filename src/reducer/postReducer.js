import {GET_ALL_CATEGORY , GET_ALL_POST , GET_SORTED_POST} from '../action/type';

const initialState = {
    categoryList:[],
    postList:[],
    sortCat:{},
    sortedList:[],
}

export default function (state = initialState , action){
    switch(action.type){

        case GET_ALL_CATEGORY :
            return{
                ...state,
                categoryList:action.payload
            }

        case GET_ALL_POST :
            return{
                ...state,
                postList:action.payload
            }

        case GET_SORTED_POST :
            const selectedCat = state.categoryList.filter((cat)=>(cat.meta_title === action.payload));
            return{
                ...state,
                sortedList:state.postList.filter((post)=>(post.cat_name === action.payload)),
                sortCat:selectedCat[0]
            }


        default :
            return state
    }
}