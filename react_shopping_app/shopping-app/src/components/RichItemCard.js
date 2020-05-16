import React from 'react'
import AddButton from './AddButton'

export default class RichItemCard extends React.Component{
    constructor(props) {
        super(props)
        this.addCart = this.addCart.bind(this)
    }
    addCart() {
        this.props.addCart()
    }
    render() {
        return (
            <div className="card-container">
                <div>
                    <h3 className='rich-item-card-title'>{ this.props.product.name }</h3>
                    <p className='rich-item-card-price'>{ this.props.product.price }円</p>
                    <AddButton className='rich-item-card-price' addCart={ this.addCart }/>
                </div>
                <div>
                    <img className='rich-item-card-img' src={this.props.product.imgSrc} alt='img'/>
                    <p className='rich-item-card-description'>{ this.props.product.description }</p>
                </div>
            </div>
        )
    }
}