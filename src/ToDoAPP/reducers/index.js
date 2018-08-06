export function addItemReducer(state = {}, action) {
    if(action.type !== 'ADD_ITEM') { return state; }
  return Object.assign({}, state, {
    items: [...state.items, {id: Math.random()*1899283498+'', text: action.text, isComplete: false}]
  });
}

export function removeItemReducer(state = {}, action) {
    if(action.type !== 'REMOVE_ITEM') return state;
}

export function updateItemReducer(state = {}, action) {
    if(action.type !== 'UPDATE_ITEM') return state;
}

export function toggleCompletionReducer(state = {}, action) {
    if(action.type !== 'TOGGLE_COMPLETION') return state;
}

export function repositionItemReducer(state = {}, action) {
    if(action.type !== 'RE_POSITION_ITEMS') return state;
}