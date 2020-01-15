import React, {Component} from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {Link} from 'react-router-dom';
import Button from '../Buttons/button';
import Axios from 'axios';
import {URL} from '../../config';
import './newslist.css';
class NewsList extends Component{
    state={
        items:[],
        start: this.props.start,
        end: this.props.start + this.props.amount,
        amount: this.props.amount

    }
     componentDidMount(){
        this.request(this.state.start, this.state.end)
    }
     request = async (start, end)=>{
        const response = await Axios.get(`${URL}/articles?_start${start}&_end=${end}`)
        this.setState({
            items:[...this.state.items, ...response.data],
        })
    }
     renderNews = (type)=>{
        let template = null;
        switch(type){
            case ('card'):
                template = this.state.items.map((item,i)=>{
                    return(
                        <CSSTransition
                        classNames={{
                            enter: "newsList_wrapper",
                            enterActive:"newsList_wrapper_enter",
                            
                        }}
                        timeout={500}
                        key={i}
                        >
                            <div >
                            <div className="newslist_item">
                                <Link to={`/articles/${item.id}
                                `}>
                                    <h2>{item.title}</h2>
                                </Link>
                            </div>
                        </div>
                        </CSSTransition>
                        
                    )
                })
                break;
                default:
                    template=null;
        }
        return template;
    }
    loadMore = ()=>{
        //console.log('clicked');
        let end = this.state.end + this.state.amount
        this.request(this.state.end, end)
    }
    render(){
       
        return(
            <div>
                <TransitionGroup
                component="div"
                className="List"

                >
                {this.renderNews(this.props.type)} 
                </TransitionGroup>
                <Button
                type="loadmore"
                loadMore={this.loadMore}
                cta="Load More News"
                >

                </Button>
                
            </div>
        )
    }
}
export default NewsList;


