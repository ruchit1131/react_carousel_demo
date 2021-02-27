import React, { Component } from 'react';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './App.css';



export class App extends Component {
  state = {
    data : [],
  }

  componentDidMount() {
    axios.get('/influencer').then( res => {
      console.log(res.data);
      this.setState({data : res.data});
      console.log(this.state.data);
    })
}


  render() {
    return (
      <>
      <span style={{color:'white',zIndex: '2', position:"fixed",top:"2%", left:"2%"}}>Storybook</span>

      <Carousel dynamicHeight={false} showArrows={true} showStatus={false} showIndicators={false} infiniteLoop={true} showThumbs={false} >
                {this.state.data.map((item) => (
                   <>
                   <img src={item.image} style={{padding: '5px', maxWidth:"500px", height:"auto", width:"100%" }} alt=""></img>
                   <a href={item.url}><h2 style={{ maxWidth:"20em",margin: 'auto',position:"absolute", zIndex: '2',color:'white',top:"50%",left:"30%", background:'grey'}}>{item.name}</h2></a>
                  <h3 style={{ maxWidth:"25em",position:"absolute", zIndex: '2',color:'white',top:"60%",left:"30%",background:'grey' }}>{item.knownFor}</h3>
                  </>
                ))
                }
      </Carousel>
      </>
    )
  }
}

export default App
