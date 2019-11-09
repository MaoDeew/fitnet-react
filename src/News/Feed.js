import React, {Component} from 'react';
import {NewsBody} from './News1.js';

class Feed extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
            <div className = "main-body">
                <NewsBody
                    name="Julian"
                    handle="@julian1"
                    news="Caminar es la accion de poner un pie al frente del otro"/>
            </div>
        );
    }
}

export default Feed