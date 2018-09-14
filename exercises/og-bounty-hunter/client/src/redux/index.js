import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'

const state = {
    bounties: []
}

export const getBounties = () => {
    return function(dispatch) {
        axios.get('/bounty').then(res => {
            dispatch({
                type: "GET_BOUNTIES",
                data: res.data
            })
        })
    }
}

export const postBounty = obj => {
    return function(dispatch) {
        axios.post('/bounty', obj).then(res => {
            dispatch({
                type: "POST_BOUNTY",
                data: res.data
            })
        })
    }
}

export const updateBounty = (obj, key) => {
    return function(dispatch) {
        axios.put(`/bounty/${key}`, obj).then(res=> {
            dispatch({
                type: "UPDATE_BOUNTY",
                data: res.data
            })
        })
    }
}

export const deleteBounty = id => {
    return function(dispatch){
        axios.delete(`/bounty/${id}`).then(res => {
            dispatch({
                type: "DELETE_BOUNTY",
                data: res.data
            })
        })
    }
}

const reducer = (prevState = state, action) => {
    switch(action.type) {
        case "GET_BOUNTIES": 
            // console.log(action.data)
            return {
                bounties: [...action.data]
            }
        case "POST_BOUNTY":
            return {
                bounties: [...action.data]
            }
        case "DELETE_BOUNTY":
            return {
                bounties: [...action.data]
            }
        case "UPDATE_BOUNTY":
            return {
                bounties: [...action.data]
            }
        default:
            return prevState
    }
}

export default createStore(reducer, applyMiddleware(thunk))