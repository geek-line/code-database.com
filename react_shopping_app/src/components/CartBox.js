import React from 'react'
import ResetButton from './ResetButton'
import CartItem from './CartItem'

export default class cartBox extends React.Component{
    constructor(props) {
        super(props)
        this.changeNum = this.changeNum.bind(this)
        this.resetCart = this.resetCart.bind(this)
    }
    changeNum(newNumber, index) {
        this.props.changeNum(newNumber, index)
    }
    resetCart() {
        this.props.resetCart()
    }
    render() {
        const cartItem = this.props.cartItems.map( (cartItem, index) => {
            return (
                <CartItem
                    key={cartItem.name }
                    changeNum={ this.changeNum}
                    index={ index }
                    cartItem={ cartItem }
                />
            )
        })
        let sum = 0
        for (let i = 0; i < this.props.cartItems.length; i++) {
            sum += this.props.cartItems[i].price * this.props.cartItems[i].quantity
        }
        return (
            <div className="cart-box-container">
                {cartItem}
                <div>合計金額 : { sum }円</div>
                <ResetButton resetCart={ this.resetCart }/>
            </div>
        )
    }
}