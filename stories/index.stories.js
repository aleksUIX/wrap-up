import React from 'react'

import { storiesOf } from '@storybook/react'

import Stepper from '../src'

const styles = {
    width: 400,
}

storiesOf('Wrapup', module).add('with scroll', () => (
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
