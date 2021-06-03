import React, {Component} from 'react';
import {postTouit} from '../api/TouitAPI';

class SendMessageForm extends Component
{
    constructor(props){
        super(props)
        this.state = {
            userName: '',
            userMessage:''
        }
    }

    recupUserData = (event) => {
        this.setState(
            {
                userName:event.target.value,       
            })
    }

    recupMessageData = (event) => {
        this.setState(
            {
                userMessage:event.target.value,
            })
    }


    sendData = (e) => {
        e.preventDefault();
        postTouit(this.state.userName, this.state.userMessage);
    }

    render(){
        return(
            <section className="main-content content-user" id="content-user">
                <form className="form-user" onSubmit={this.sendData}>
                    <div className="form-group">
                    <input type="text" className="form-control" minLength={3} maxLength={16} placeholder="... Pseudo ..." value={this.state.userName} onChange= {this.recupUserData} >
                    </input>
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control"  maxLength={256} minLength={3} placeholder="... Message ..." value={this.state.userMessage} onChange= {this.recupMessageData} >
                    </input>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        @ TOUIT @
                    </button>
                </form>
            </section>
        )}
}

export default SendMessageForm;