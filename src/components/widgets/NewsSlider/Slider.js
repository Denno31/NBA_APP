import React, { Component } from 'react'
import SliderTemplates from './slider_templates';
import axios from "axios";

export default class NewsSlider extends Component {
    state ={
        news: [],
    }
   async componentWillMount(){
      const response = await axios.get(`http://localhost:3004/articles?_start=${this.props.start}&_end=${this.props.amount}
      `);
      this.setState({
          news:response.data,
      })
    
    }
  
    render() {
        console.log(this.state.news);
        return (
            <div>
                <SliderTemplates data={this.state.news} type={this.props.type} settings={this.props.settings}/>
            </div>
        )
    }
}
