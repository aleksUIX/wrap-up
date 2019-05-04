import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './styles.css'

const Step = ({ children, isPast, isActive }) => (
    <div
        className={classnames('step', {
            'step--active': isActive,
            'step--past': isPast,
        })}
    >
        <div className="content-wrapper">{children}</div>
        <div className="progress-bar" />
    </div>
)

Step.displayName = 'Step'
Step.propTypes = {
    children: PropTypes.node.isRequired,
    isActive: PropTypes.bool,
    isPast: PropTypes.bool,
}

export default Step
