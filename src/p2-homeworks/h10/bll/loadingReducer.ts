export type StateType = {
    loading: boolean
}

const initState = {
    loading: false
}

export type SetLoadingActionType = {
    type: 'SET LOADING'
    value: boolean
}

export const loadingReducer = (state = initState, action: SetLoadingActionType): StateType => { // fix any
    switch (action.type) {
        case 'SET LOADING': {
            return {...state, loading: action.value}
        }
        default: return state
    }
}

export const loadingAC = (value:boolean): SetLoadingActionType => {
    return {type: 'SET LOADING', value}
}