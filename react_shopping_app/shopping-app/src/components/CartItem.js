import React from 'react'

export default class CartItem extends React.Component {
    constructor(props) {
        super(props)
        this.addCart = this.addCart.bind(this)
        this.changeNum = this.changeNum.bind(this)
    }
    addCart() {
        this.props.addCart()
    }
    changeNum(e) {
        this.props.changeNum(e.target.value, this.props.index)
    }
    render() {
        return (
            <div className="cart-item-container">
                <h3 className="cart-item-title">{ this.props.cartItem.name }</h3>
                <p className="cart-item-title">{ this.props.cartItem.price }円</p>
                <input type="number"
                    className='cart-item-input'
                    value={this.props.cartItem.quantity}
                    onInput={this.changeNum}
                />
            </div>
        )
    }
}