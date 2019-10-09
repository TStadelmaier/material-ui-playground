

const initialState= {
    pages:[]
}

const pageReducer= (state=initialState, action) => {
    return{
     ...state
    }
}

export default pageReducer;