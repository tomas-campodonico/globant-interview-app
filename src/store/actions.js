export const REF_DATA_LOADED = 'ref-data-loaded';
export const PHASE_SELECTED = 'phase-selected';
export const USER_UPDATED = 'user-updated';
export const PERSONALITY_TRAITS_UPDATED = 'personality-traits-updated';
export const QUESTIONS_UPDATED = 'questions-updated';

export const loadRefData = (data, dispatch) =>
    dispatch({ type: REF_DATA_LOADED, data });

export const selectPhase = (phase, dispatch) =>
    dispatch({ type: PHASE_SELECTED, phase });

export const updateUser = (user, dispatch) =>
    dispatch({ type: USER_UPDATED, user });

export const updatePersonalityTraits = (traits, dispatch) =>
    dispatch({ type: PERSONALITY_TRAITS_UPDATED, traits });

export const updateQuestion = (categories, dispatch) =>
    dispatch({ type: QUESTIONS_UPDATED, categories });
