import applicationState from '../appState/applicationState';

const combinedReducer = (state = applicationState.home, action) =>{
    switch (action.type) {
        case 'UPDATE':
            let newState = {...state, ...action.data };
            return newState;
        default:
            return state;
    }
}
export default combinedReducer;