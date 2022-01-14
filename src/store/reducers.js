import {
    REF_DATA_LOADED,
    PHASE_SELECTED,
    USER_UPDATED,
    PERSONALITY_TRAITS_UPDATED
} from './actions';

export const initialState = {
    selectedPhase: null,
    user: {},
    personalityTraits: [],
    questions: []
};

export const initiateState = (referenceData) => {
    return {
        originalData: referenceData,
        selectedPhase: referenceData.questions[0].key,
        user: {},
        personalityTraits: referenceData.traits,
        questions: referenceData.questions
    };
};

export const reducers = (state, action) => {
    switch (action.type) {
        case REF_DATA_LOADED:
            return initiateState(action.data);

        case PHASE_SELECTED:
            return { ...state, selectedPhase: action.phase };

        case USER_UPDATED:
            return { ...state, user: action.user };

        case PERSONALITY_TRAITS_UPDATED:
            return { ...state, personalityTraits: action.traits };

        default:
            throw new Error();
    }
};
