import {UserType} from "../HW8";

export type SortActionType = {
    type: 'sort',
    payload: 'up' | 'down'
}

export type Check18Type = {
    type: 'check'
}

export type AllActionTypes = SortActionType | Check18Type

export const homeWorkReducer = (state: Array<UserType>, action: AllActionTypes): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state]
            if(action.payload === 'up') {
                newState.sort((a, b) =>{
                    return a.name.localeCompare(b.name)
                })
            }
            if(action.payload === 'down') {
                newState.sort((a, b) =>{
                    return a.name.localeCompare(b.name)
                }).reverse()
            }
            return newState
        }
        case 'check': {
            const newState = state.filter( i => i.age > 18)
            return newState
        }
        default:
            return state
    }
}