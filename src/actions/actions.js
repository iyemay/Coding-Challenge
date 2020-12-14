export const GO_TO_START_COMPONENT = "GO_TO_START_COMPONENT";
export const GO_TO_QUESTIONS_COMPONENT = "GO_TO_QUESTIONS_COMPONENT";
export const GO_TO_LAST_COMPONENT = "GO_TO_LAST_COMPONENT";

export function goToStartComponentAction () {
    return {
        type: GO_TO_START_COMPONENT
    }
}

export function goToQuestionsComponentAction () {
    return {
        type: GO_TO_QUESTIONS_COMPONENT
    }
}

export function goToLastComponentAction () {
    return {
        type: GO_TO_LAST_COMPONENT
    }
}