import { Component } from "react";
import Header from '../../common/header/Header';
import './Home.css'
import GridListBanner from "../../common/GridListBanner";
import Movielistdisplay from "../../common/MovieListDisplay";

export default class Home extends Component{
    render(){
        return(
            <div><Header/>
                <div className='head'>
                    <span>Upcoming Movies</span>
                </div>
                <GridListBanner />
                <div className="flex-container">
                    <div className="left">
                        <Movielistdisplay />
                    </div>
                    <div className="right">
                        <MovieFilter/>

                    </div>
                </div>
            
            </div>
        );
    }
}