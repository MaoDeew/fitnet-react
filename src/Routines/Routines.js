import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';
import Routine from '../Routines/Routine'

class Routines extends Component{


    render(){
        return(
            <div>
            <NavBar />
            <div>
            <h1>This is routines</h1>
            <Routine title='Push ups'/>
            </div>
            </div>
        );
    }

}

export default Routines;