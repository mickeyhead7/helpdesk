import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Card from '../patterns/Card';

storiesOf('Card', module)
  .add('Default', () => (
    <Card>
      <div>Hello</div>
    </Card>
  ));