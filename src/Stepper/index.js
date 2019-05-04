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
    const [active, setActive] = useState(0)

    return (
        <div style={styles} type="button">
            {children.map((step, i) => {
                return (
                    <Step
                        isActive={active ? active === i : activeStep === i}
                        isPast={i < activeStep}
                        onClick={() => {
                            console.log(i)
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
