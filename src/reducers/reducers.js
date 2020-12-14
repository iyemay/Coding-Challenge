import { GO_TO_START_COMPONENT,
        GO_TO_QUESTIONS_COMPONENT,
        GO_TO_LAST_COMPONENT }
        from "../actions/actions";

export const initialState = {
    startComponentVisibility: true,
    questionsComponentVisibility: false,
    lastComponentVisibility: false
}

export function applicationReducer(state = initialState, action) {
    switch (action.type) {
        case GO_TO_START_COMPONENT:
            return initialState
        case GO_TO_QUESTIONS_COMPONENT:
            return {
                startComponentVisibility: false,
                questionsComponentVisibility: true,
                lastComponentVisibility: false
            }
        case GO_TO_LAST_COMPONENT:
            return {
                startComponentVisibility: false,
                questionsComponentVisibility: false,
                lastComponentVisibility: true
            }
        default:
            return initialState
    }
}