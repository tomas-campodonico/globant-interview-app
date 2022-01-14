/**
 * This file is in charge of getting the data.
 *
 * At the moment we are hardcoding the info in JSON files,
 * but it should be possible to easily change it to fetch
 * it from an API.
 */

import questions from '../data/questions.json';
import englishLevel from '../data/english.json';
import traits from '../data/personality-traits.json';

export const fetchInfo = () => {
    return Promise.resolve({
        referenceData: {
            questions,
            englishLevel,
            traits
        }
    });
};
