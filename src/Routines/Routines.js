import React, {Component} from 'react';
import axios from './axiosInstance'
import NavBar from '../NavBar/NavBar';
import Routine from '../Routines/Routine'

class Routines extends Component{

    state = {
        routines : [],
        loading : false,
        nextPage: null,
        previousPage:null
    }

    componentDidMount() {
        this.setState({
          loading: true
        });
    
        axios.get("/exercise/?language=2&status=2")
          .then(response => {
            console.log(response);
            this.setState({
              routines: response.data.results,
              loading: false,
              nextPage : response.data.next,
              previousPage: response.data.previous
            });
          })
         
      }

    render(){
        console.log(this.state.routines)
        return(
            <div>
            <NavBar />
            <div>
            <h1>This is routines</h1>
            {this.state.routines.map(routine => <Routine key={routine.id} title={routine.name} />)}
            <Routine title='Push ups'/>
            </div>
            </div>
        );
    }

}

export default Routines;