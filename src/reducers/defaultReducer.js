const initialState = {
    defaultValues: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case "FETCH_DEFAULTS":
            return {
                ...state,
                defaultValues: action.payload
            }
        default:
            return state;
    }
}