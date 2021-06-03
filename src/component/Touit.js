import React, { Component } from "react";
import {likeTouit, removeTouit} from '../api/TouitAPI';
import './Touit.css'


class Touit extends Component
{
    constructor(props){
        super(props)
        this.state={
            buttLikeDisabled : false,
            btnLike:'btnLikeKo'
        }
    }


    toogleTouit = () => {
        if(this.state.buttLikeDisabled === false){
            likeTouit(this.props.id);
            this.setState({
                buttLikeDisabled : true,
                btnLike:'btnLikeOk'
            })
            } else {
                removeTouit(this.props.id);
                this.setState({
                    buttLikeDisabled : false,
                    btnLike:'btnLikeKo'
                })
            }
        }


    render(){
        return(
            <div className="touit-list">
                <article className="touit-item">
                    {/* <p className="user-date"></p> */}
                    <p className="user-message">{this.props.message}</p>
                    <p className="user-pseudo">{this.props.pseudo}</p>
                    <div className="btn-touit">
                        {/* <button className="btn-touit-comment"></button> */}
                        <button className={`btn-touit-like ${this.state.btnLike}`} onClick={this.toogleTouit}></button>
                    </div>
                </article>
            </div> 
        )}
}

export default Touit;