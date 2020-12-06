import applicationState from '../appState/applicationState';

const portfolioReducer = (state = applicationState.portfolio, action) =>{
    switch (action.type) {
        case 'UPDATE':
            let newState = {...state, ...action.data };
            return newState;
        default:
            return state;
    }
}
export default portfolioReducer;