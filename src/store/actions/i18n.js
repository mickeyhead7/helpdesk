export const ADD_PHRASES = 'ADD_PHRASES';
export const SET_LOCALE = 'SET_LOCALE';

export const addPhrases = (locale, phrases) => ({
  type: ADD_PHRASES,
  locale,
  phrases,
});

export const setLocale = locale => ({
  type: SET_LOCALE,
  locale,
});
