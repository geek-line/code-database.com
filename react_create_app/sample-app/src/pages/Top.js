import React from 'react'

export default class TopPage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            greeting :'hello world'
        }
    }
    render() {
        return (
            <div>{ this.state.greeting }</div>
        )
    }
}