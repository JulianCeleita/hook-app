
export const todoReducer = (initialState = [], action:any) => {

    switch ( action.type ) {
        case 'Add Todo':
return [ ...initialState, action.payload ]    
        default:
            return initialState;
    }

}
