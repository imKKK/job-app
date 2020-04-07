import { ADD_SEARCH } from "../actions/action";

const initialState = {
    search: {
        title: "",
        content: ""
    }
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SEARCH:
            return {
                search: {
                    title: action.title,
                    content: action.content
                }
            }
        default:
            return state;
    }
}

export default rootReducer;