import React from 'react'

function Form(props) {
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {props.features}
          </form>
    )
}

export default Form