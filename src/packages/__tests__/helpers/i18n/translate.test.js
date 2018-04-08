import { createInstance, translator } from '../../../helpers/i18n/translate';

const language = {
  foo: 'bar',
};

test('Translator should return an expected string for language key', () => {
  const translate = translator(createInstance(language));
  const result = translate('foo');

  expect(result).toEqual(language.foo);
});
