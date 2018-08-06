import {
    addItemReducer,
    removeItemReducer,
    updateItemReducer,
    toggleCompletionReducer,
    repositionItemReducer
} from './reducers'
export default function (state = {}, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return addItemReducer(state, action);
        case 'REMOVE_ITEM':
            return removeItemReducer(state, action);
        case 'UPDATE_ITEM':
            return updateItemReducer(state, action);
        case 'TOGGLE_COMPLETION':
            return toggleCompletionReducer(state, action);
        case 'RE_POSITION_ITEMS':
            return repositionItemReducer(state, action);
        default:
            return state;
    }
}