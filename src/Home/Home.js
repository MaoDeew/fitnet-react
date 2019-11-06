import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Informative from '../Informative/Informative';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Home.css';


import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


class Home extends Component {

  renderLoading() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1 >Loading informatives</h1> <CircularProgress />
      </div>
    );
  }

  renderInformatives() {
    return (
      <div>
        <div className="alignment">
          <h1 style={{ textAlign: 'center' }}>Home</h1>
          <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
            {this.props.informatives.map(informative => <Informative key={informative.id} title={informative.title} src={informative.src} description={informative.description} />)}
          </Grid>
        </div>
      </div>

    );
  }

  render() {

    return (
      <div>
        {this.props.informatives ? this.renderInformatives() : this.renderLoading()}
      </div>
    );


  }

}

const mapStateToProps = (state) => {
  console.log(state.firestoreStore)
  return {
    informatives: state.firestoreStore.ordered.informatives
  }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'informatives' }
  ])
)(Home);
