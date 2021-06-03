import React, { Component } from "react";
import {getBestLikeTouit, GetTrending, bestInfluent} from '../api/TouitAPI';



class TouitTrending extends Component{
    constructor(props){
        super(props)
        this.state={
            tbBestLikeTouit : [],
            tbTrending:[],
            tbInflu:[]

        }
    }

    componentDidMount (){
        getBestLikeTouit(
            (data) =>{
                this.setState({
                    tbBestLikeTouit : data.top
                });}
            ,
            (error) => {console.log('data non récupéés')}
        )
        GetTrending(
            (data) =>{
                this.setState({
                    tbTrendind : data
                })
                for (const [key, value] of Object.entries(this.state.tbTrendind)) {
                    //console.log(`${key}: ${value}`);
                  }
            }
            ,
            (error) => {console.log('data non récupéés')}
        )
        bestInfluent(
            (data) =>{
                let getInflu=[];
                for (const [key, value] of Object.entries(data.influencers)) {
                    getInflu.push(`${key}`)
                this.setState({
                    tbInflu:getInflu
                })
            }}

        )
    }


    
    render() {
        return(
            <section className="main-content content-trending" id="content-trending">
            <div className="actu-list">
                <h3>Touits les + likés</h3>
                <div className="like-items">
                    {
                        this.state.tbBestLikeTouit.map(el =>
                            <>
                            <p>{el.message}</p>
                            <p> --- </p>
                            </>
                        )
                    }
                </div>
                <div className="separate-items"></div>
                <h3>Termes les + cités</h3>
                <div className="trend-items">

                </div>
                <div className="separate-items"></div>
                <h3>Influenceurs les + Actifs</h3>
                <div className="influ-items">
                {
                        this.state.tbInflu.map(el =>
                            <>
                            <p>{el}</p>
                            <p> --- </p>
                            </>
                        )
                    }
                </div>
                
            </div>
        </section>
        )
    }
}

export default TouitTrending;