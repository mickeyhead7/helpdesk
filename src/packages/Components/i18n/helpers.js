import Polyglot from 'node-polyglot';
import { defaultLocale } from './constants';

export const createInstance = (phrases = {}, locale = defaultLocale) =>
  new Polyglot({ phrases, locale });

export const translator = instance => (key, params = {}) => instance.t(key, params);

export const pluraliser = instance => (key, count = 1) => instance.t(key, count);
