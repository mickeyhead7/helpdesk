import { mergeDeepRight } from 'ramda';
import { createReducer } from '@packages/helpers/redux';
import { ADD_PHRASES, SET_LOCALE } from '@store/actions/i18n';

const defaultLocale = 'en-GB';

const initialState = {
  locale: defaultLocale,
  phrases: {
    [defaultLocale]: {},
  },
};

const combinePhrases = (initialPhrases, newPhrases, locale) => {
  const combinedPhrases = mergeDeepRight(initialPhrases[locale], newPhrases[locale]);
  const result = {
    ...initialPhrases,
    [locale]: combinedPhrases,
  };

  return result;
};

const addPhrases = (state = initialState, action) => ({
  ...state,
  phrases: combinePhrases(state.phrases, action.phrases, action.locale),
});

const setLocale = (state = initialState, action) => ({
  ...state,
  locale: action.locale,
});

const performAction = createReducer({
  [ADD_PHRASES]: addPhrases,
  [SET_LOCALE]: setLocale,
});

export default (state = initialState, action) => performAction(state, action);
