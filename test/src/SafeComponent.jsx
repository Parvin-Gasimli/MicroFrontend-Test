import React ,{Component} from 'react'
export default class SafeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }


    static getDerivedStateFromError(error) {
        return {  hasError: true  }
    }

    componentDidCatch() { }

    render() {
        if (this.state.hasError) {
            return <h4> Someting went Wrong</h4>
        }

        return this.props.children
    }
}