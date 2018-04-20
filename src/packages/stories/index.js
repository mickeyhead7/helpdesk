import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '@packages/patterns/Card';

storiesOf('Card', module)
  .add('Default', () => (
    <Card>
      <div>Hello</div>
    </Card>
  ));
