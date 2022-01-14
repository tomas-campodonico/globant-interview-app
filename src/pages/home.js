import React, { useReducer } from 'react';
import { PersonalityTraits } from '../components/personality-traits';
import { MainLayout } from '../components/main-layout';
import { UserInfo } from '../components/user-info';
import { QuestionsSection } from '../components/questions-section';

import { selectPhase, updateUser, updatePersonalityTraits, updateQuestion } from '../store/actions';
import { useStoreContext } from '../store/store-context';

export const Home = () => {
     const { storeState, storeDispatch } = useStoreContext();

    const getViewToRender = () => {
        switch (storeState.selectedPhase) {
            case 'user':
                return (
                    <UserInfo
                        user={storeState.user}
                        updateUser={(user) => updateUser(user, storeDispatch)}
                    />
                );

            case 'personality-traits':
                return (
                    <PersonalityTraits
                        personalityTraits={storeState.personalityTraits}
                        updatePersonalityTraits={(values) => updatePersonalityTraits(values, storeDispatch)}
                    />
                );
        
            default:
                return (
                    <QuestionsSection
                        categoryQuestions={storeState.questions.find(cat => cat.key === storeState.selectedPhase)}
                        updateQuestions={(values) => updateQuestion(values, storeDispatch)}
                    />
                );
        }
    };

    return (
        <MainLayout
            selected={storeState.selectedPhase}
            onSelectionChanged={(phase) => selectPhase(phase, storeDispatch)}
        >
            {getViewToRender()}
        </MainLayout>
    );
};
