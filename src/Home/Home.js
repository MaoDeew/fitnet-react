import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';
import Informative from '../Informative/Informative';
import Grid from '@material-ui/core/Grid';
import './Home.css';


class Home extends Component {

  state = {
    informatives: [
      { title: "Flexiones", src: "https://www.ecestaticos.com/imagestatic/clipping/453/50c/45350ccfbd2c56d6582cdfb3c5b82df3/los-cinco-ejercicios-de-cardio-que-queman-mas-calorias-que-correr.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
      { title: "Estiramiento", src: "https://statics-cuidateplus.marca.com/sites/default/files/styles/natural/public/estirar-despues-deporte.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
      { title: "Comida Balanceada", src: "http://images.teinteresa.es/salud/EJERCICIO-NUTRICION_TINIMA20170509_0106_20.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
      { title: "Motivación", src: "http://diegoperalta.net/wp-content/uploads/2016/10/motivacion-ejercicio_thumb.png", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
      { title: "Dormir bien", src: "https://cdn.hsnstore.com/blog/wp-content/uploads/2011/09/importancia-dormir.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    ]
  }

  render(){
    return (
      <div>
          {
                   //<NavBar />
               } 
      <div className="alignment">
      <h1 style={{textAlign: 'center'}}>Home</h1>
      <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
        {this.state.informatives.map(informative => <Informative title={informative.title } src={informative.src} description={informative.description} />)}
      </Grid>
      </div>
      </div>
  );
  }

  //Cambia el state a los 10 segundos
componentDidMount(){
  setTimeout(()=>{
    this.changeState();
  }, 10000);
}

  changeState = () => {
    const otherInformatives = [
      { title: "BodyBuilding", src: "https://as.com/deporteyvida/imagenes/2018/01/19/portada/1516362365_412726_1516362602_noticia_normal.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
      { title: "¿Como empezar?", src: "https://ichef.bbci.co.uk/news/ws/624/amz/worldservice/live/assets/images/2014/11/25/141125135358_errores_ejercicio_624x351_thinkstock.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
      { title: "Calorias", src: "https://concepto.de/wp-content/uploads/2019/03/calorias-e1553207648129.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
      { title: "Yoga", src: "https://i.ytimg.com/vi/sKgAjzlkKH8/maxresdefault.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
      { title: "Baloncesto", src: "https://sportadictos.com/wp-content/blogs.dir/29/files/2013/09/canasta-de-baloncesto.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
    ]
    this.setState({
      informatives: otherInformatives
    }, console.log(this.state));
  };

  
}

export default Home;
