import React from 'react'

class SendMessageForm extends React.Component {
    constructor() {
        super()

        this.state = {
            message: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.sendMessage(this.state.message)
        this.setState({
            message: ''
        })
    }

    render() {
        return (
            <form
            onSubmit={this.handleSubmit} 
            className="send-message-form">
                <input
                    disabled={this.props.disabled}
                    value={this.state.message}
                    onChange={this.handleChange}
                    placeholder="Type your message here and Hit Enter"
                    type="text" />
            </form>
        )
    }
}

export default SendMessageForm