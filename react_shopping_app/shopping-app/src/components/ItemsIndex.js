import React from 'react'
import ProductsBox from './ProductsBox'
import CartBox from './CartBox'

export default class ItemIndex extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            cartItems: []
        }
        this.addCart = this.addCart.bind(this)
        this.resetCart = this.resetCart.bind(this)
        this.changeCartItems = this.changeCartItems.bind(this)
    }
    addCart(product) {
        let isFounded = false
        let cartNumber = null
        for (let i = 0; i < this.state.cartItems.length; i++) {
            if (this.state.cartItems[i].name === product.name) {
                isFounded = true
                cartNumber = i
                break
            }
        }
        // const cartItems = this.state.cartItems;
        if (isFounded) {
            this.setState(function (state) {
                state.cartItems[cartNumber].quantity += 1
                return {
                    cartItems: state.cartItems
                }
            })
            // this.setState({ cartItem: cartItems[cartNumber].quantity += 1})
        } else {
            this.setState(function (state) {
                return {
                    cartItems: state.cartItems.concat({ name: product.name, price: product.price, quantity: 1 })
                }
            })
        }
    }
    changeCartItems(newNumber, index) {
        const cartItems = this.state.cartItems
        if (newNumber > 0) {
            cartItems[index].quantity = Number(newNumber)
        } else {
            cartItems.splice(index, 1)
        }
        this.setState({ cartItems: cartItems })
    }
    resetCart() {
        this.setState({ cartItems:[]})
    }
    render() {
        return (
            <div className="item-index-container">
                <ProductsBox
                    addCart={this.addCart}
                    products={this.props.products} 
                />
                <CartBox
                    resetCart={this.resetCart}
                    changeNum={this.changeCartItems}
                    cartItems={this.state.cartItems}
                />
            </div>
        )
    }
}