import React from 'react';
import ItemsIndex from './components/ItemsIndex'

export default class App extends React.Component { 
  render() {
    return (
      <ItemsIndex products={this.props.products}/>
    )
  }
}
