import Polyglot from 'node-polyglot';

export const createInstance = language => new Polyglot({ phrases: language });

export const translator = instance => key => instance.t(key);
