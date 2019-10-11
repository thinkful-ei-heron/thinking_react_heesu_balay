import React from 'react'

function Summary(props) {
    return (
        <section className="main__summary">
            <h2>Your cart</h2>
            {props.summary}
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {props.total}
              </div>
            </div>
          </section>
    )
}

export default Summary