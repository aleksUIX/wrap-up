import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Stepper from '../src';

storiesOf('Button', module)
  .add('with text', () => <Stepper onClick={action('clicked')}></Stepper>)