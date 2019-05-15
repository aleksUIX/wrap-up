import React from 'react'

import { storiesOf } from '@storybook/react'

import Stepper from '../src'

const styles = {
    width: 400,
}

storiesOf('Wrapup', module)
    .add('with scroll', () => (
        <div style={styles}>
            <Stepper activeStep={1}>
                <>Personal details</>
                <>Contact details</>
                <>Prepare</>
                <>Select your IELTS</>
                <>Register</>
                <>Secure your place</>
                <>Confirmation</>
            </Stepper>
        </div>
    ))
    .add('with disabled steps', () => (
        <Stepper activeStep={1}>
            <div disabled>Personal details</div>
            <>Contact details</>
            <>Prepare</>
            <div disabled>Select your IELTS</div>
        </Stepper>
    ))
