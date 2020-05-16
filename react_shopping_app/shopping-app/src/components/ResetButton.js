import React from 'react'

export default class ResetButton extends React.Component{
    constructor(props) {
        super(props)
        this.handleOnClick = this.handleOnClick.bind(this)
    }
    handleOnClick() {
        this.props.resetCart()
    }
    render() {
        return (
            <button
                onClick={this.handleOnClick}
                className="btn-square"
                style={{ background: '#fd9535' } }
            >reset cart</button>
        )
    }
}