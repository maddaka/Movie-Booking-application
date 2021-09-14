import { Component } from "react";
import React from 'react';
import './Header.css';
export default class Header extends Component{
    render(){
        return(
            <div className='header'>
                <img id='logo' src='https://cdn.upgrad.com/uploads/production/286e1f11-1897-4d0c-ab0f-6b2bfc1ce642/logo.svg'></img>
            </div>
        );
    }
}