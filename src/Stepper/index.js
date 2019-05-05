/* global document */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Step from '../Step'

import './styles.css'

class Stepper extends PureComponent {
    state = {
        active: null,
    }

    setActive(index) {
        this.setState({
            previous: this.state.active,
            active: index,
        })
    }

    componentWillUpdate() {
        this.centerPosition()
    }

    centerPosition() {
        setTimeout(() => {
            const stepperElement = this.refs.stepper
            const { active, previous } = this.state
            const steps = stepperElement.getElementsByClassName('step')
            const activeCell = steps[active]
            const previousCell = previous ? steps[previous] : steps[active]

            previousCell.scrollIntoView({ behavior: 'auto', inline: 'center' })
            activeCell.scrollIntoView({ behavior: 'smooth', inline: 'center' })
        }, 5)
    }

    render() {
        const { active } = this.state
        const { activeStep, children } = this.props
        const currentStep = active !== null ? active : activeStep

        return (
            <div className="stepper" ref="stepper">
                <div className="stepper-scrollable">
                    {children.map((step, i) => {
                        return (
                            <Step
                                isActive={currentStep === i}
                                isPast={i < currentStep}
                                onClick={() => {
                                    this.setActive(i)
                                }}
                                {...step.props}
                            >
                                {step.props.children}
                            </Step>
                        )
                    })}
                </div>
            </div>
        )
    }
}

Stepper.displayName = 'Stepper'
Stepper.propTypes = {
    children: PropTypes.node.isRequired,
    activeStep: PropTypes.number,
}

export default Stepper
