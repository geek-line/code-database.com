import React from 'react'
import CountDisplay from '../components/CountDisplay'
import AddButton from '../components/AddButton'

export default class TopPage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            count :0
        }
        this.addCount = this.addCount.bind(this)
    }
    addCount() { 
        this.setState((state) => {
            return {
                count : state.count + 1
            }
        })
    }
    render() {
        return (
            <div>
                <CountDisplay count={this.state.count}/>
                <AddButton onAddCount={this.addCount}/>
            </div>
        )
    }
}