import React, { Component } from 'react';
import './App.css';



export class App extends Component {
  state = {
    data : [],
    id: 1,
    name: '',
    knownFor: '',
    image: '',
    url: ''
  }

  componentDidMount() {
    fetch('/influencer').then(response => 
      response.json()).then(resData => {
        this.setState({data : resData,
           knownFor : resData[0].knownFor,
           image : resData[0].image,
           url : resData[0].url,
           name : resData[0].name
          });
      console.log(this.state.name);
      })
}

onprev = ()=>{
  let id = this.state.id - 1;
  let count = this.state.data.length;
  id = id + count - 1;
  id = id % count;
  id++;
  console.log(this.state.data[id - 1]);
  this.setState({id : id,
    knownFor : this.state.data[id - 1].knownFor,
    image : this.state.data[id - 1].image,
    url : this.state.data[id - 1].url,
    name : this.state.data[id - 1].name
   });
}

onprev = ()=>{
  let id = this.state.id - 1;
  let count = this.state.data.length;
  id = id + count - 1;
  id = id % count;
  id++;
  console.log(this.state.data[id - 1]);
  this.setState({id : id,
    knownFor : this.state.data[id - 1].knownFor,
    image : this.state.data[id - 1].image,
    url : this.state.data[id - 1].url,
    name : this.state.data[id - 1].name
   });
}

onnext = ()=>{
  let id = this.state.id - 1;
  let count = this.state.data.length;
  id = (id + 1) % count;
  id++;
  console.log(this.state.data[id - 1]);
  this.setState({id : id,
    knownFor : this.state.data[id - 1].knownFor,
    image : this.state.data[id - 1].image,
    url : this.state.data[id - 1].url,
    name : this.state.data[id - 1].name
   });
}

  render() {
    return (
      <div data-testid={'story-' + this.state.id} className="mySlides" style={{display: 'flex', maxWidth: '1000px', margin: 'auto'}}>
        <div className="app-title">Storybook</div>

        <div className="prev" data-testid = "prev" style={{left:'0'}} onClick = {this.onprev}>&lt;</div>
      <div className="next" data-testid="next" onClick = {this.onnext}>&gt;</div>

          <img src={this.state.image} style={{maxWidth:"600px", height:"auto", width:"100%", paddingLeft: '30px', paddingRight: '30px'}}></img>
          <div className="heading-text">
          <a href={this.state.url} style={{textDecoration:'none', color:'white'}}><div className="title" data-testid={"title-" + this.state.id}>{this.state.name ? this.state.name : 'Mohandas Karamchand Gandhi'}</div></a>
          <div className="known-for">{this.state.knownFor ? this.state.knownFor : "Leadership of the campaign for India's independence from British rule, Nonviolent resistance"}</div>
          </div>
      </div>
      )
  }
}

export default App
