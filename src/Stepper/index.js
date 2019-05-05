import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Step from '../Step'

const styles = {
    border: '1px solid #eee',
    borderRadius: 3,
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
    fontSize: 15,
    padding: '3px 10px',
    margin: 10,
    display: 'flex',
}

const Stepper = ({ children, activeStep }) => {
    const [active, setActive] = useState(null)
    const currentStep = active !== null ? active : activeStep
    return (
        <div style={styles} type="button">
            {children.map((step, i) => {
                return (
                    <Step
                        isActive={currentStep === i}
                        isPast={i < currentStep}
                        onClick={() => {
                            setActive(i)
                        }}
                        {...step.props}
                    >
                        {step.props.children}
                    </Step>
                )
            })}
        </div>
    )
}

Stepper.displayName = 'Stepper'
Stepper.propTypes = {
    children: PropTypes.node.isRequired,
    activeStep: PropTypes.number,
}

export default Stepper
