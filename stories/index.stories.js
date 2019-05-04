import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Stepper from '../src'

storiesOf('Wrapup', module).add('with steps', () => (
    <Stepper activeStep={1}>
        <>Step 1</>
        <>Step 2</>
        <>Step 3</>
    </Stepper>
))
