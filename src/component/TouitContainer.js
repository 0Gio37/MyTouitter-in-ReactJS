import React, { Component } from "react";
import Touit from "./Touit";
import {getTouit} from '../api/TouitAPI';


class TouitContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            recupData:[]
        }
    }

    componentDidMount = () =>{
        this.id = setInterval(() => {
            getTouit(
                (tbMsg)=> {
                    this.setState({
                        recupData:tbMsg.messages
                    })
                }, 
                (error)=> {
                    console.log(error+"erreur de requete")
                })   
        }, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.id)
    }


   render() {
         return(
            <section className="main-content content-touit" id="content-touit">
                <h2>Derniers Touits</h2>
               <div className="touit-list"></div>
                {
                    this.state.recupData.map(
                        OneTouit => 
                       <Touit key={OneTouit.id} id={OneTouit.id} message= {OneTouit.message} pseudo= {OneTouit.name} />)
                }
             </section>
         )
     }
 }

export default TouitContainer;