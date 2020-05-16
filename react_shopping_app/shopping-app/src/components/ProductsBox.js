import React from 'react'
import RichItemCard from './RichItemCard'

export default class ProductsBox extends React.Component { 
    constructor(props) {
        super(props)
        this.addCart = this.addCart.bind(this)
    }
    addCart(product) {
        this.props.addCart(product)
    }
    render() {
        let richItemCards = this.props.products.map( (product) => {
            return (
                <RichItemCard
                    product={product}
                    key={product.id}
                    addCart={() => { this.addCart(product) }}
                />
            )
        })
        return (
            <div className="products-box-container">
                {richItemCards}
            </div>
        )
    }
}