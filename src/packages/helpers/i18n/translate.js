import Polyglot from 'node-polyglot';

export const createInstance = (phrases = {}, locale = 'en') => new Polyglot({ phrases, locale });

export const translator = instance => (key, params = {}) => instance.t(key, params);

export const pluraliser = instance => (key, count = 1) => instance.t(key, count);
