import React from 'react'

export default class AddButton extends React.Component{
    constructor(props) {
        super(props)
        this.handleOnClick = this.handleOnClick.bind(this)
    }
    handleOnClick() {
        this.props.addCart()
    }
    render() {
        return (
            <button
                onClick={this.handleOnClick}
                className="btn-square"
            >add to cart</button>
        )
    }
}