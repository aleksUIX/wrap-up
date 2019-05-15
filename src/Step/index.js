import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './styles.css'

const Step = ({ children, isPast, isActive, onClick, disabled }) => (
    <div
        className={classnames('step', {
            'step--active': isActive,
            'step--past': isPast,
            'step--disabled': disabled,
        })}
        onClick={disabled ? () => {} : onClick}
    >
        <div className="content-wrapper">{children}</div>
        <div className="progress-bar">
            <div className="progress-bar-fill" />
        </div>
    </div>
)

Step.displayName = 'Step'
Step.propTypes = {
    children: PropTypes.node.isRequired,
    isActive: PropTypes.bool,
    isPast: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
}

export default Step
