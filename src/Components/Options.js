import React from 'react'

class Options extends React.Component {
    render() {
        return (
            <div key={this.props.itemHash} className="feature__item">
                  <input
                    type="radio"
                    id={this.props.itemHash}
                    className="feature__option"
                    name={this.props.name}
                    checked={this.props.checked}
                    onChange={this.props.onChange}
                  />
                  <label htmlFor={this.props.itemHash} className="feature__label">
                    {this.props.currItem.name} ({this.props.currency.format(this.props.currItem.cost)})
                  </label>
            </div>
        )
    }
}

export default Options