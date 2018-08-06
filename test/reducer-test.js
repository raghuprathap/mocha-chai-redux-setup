import mocha from 'mocha';
import { createStore } from 'redux';
import ToDoAPP from '../src/ToDoAPP';
import chai from 'chai';
import deepFreeze from 'deep-freeze';
const should = chai.should();
describe('ToDoAPP', function () {
    it('should add item', function () {
        const initialState = deepFreeze({
            items: [{
                id: Math.random() * 892793492 + '',
                text: 'Item 1',
                isComplete: false
            }]
        });
        const store = createStore(ToDoAPP, initialState);
        store.dispatch({
            type: 'ADD_ITEM',
            text: 'New Item'
        });
        console.log("Store.state", store.getState())
        store.getState().should.have.property('items').of.length(2);
    })
})