import { div } from 'prelude-ls';
import React , {Component} from 'react';
import CardsArray from './CardsArray';
import SearchBox from './SearchBox';
import {robots} from './robots';
import './App.css';


class App extends Component{
    
    constructor(){
        super()
        this.state={
            robots : robots,
            searchfield: ''
        }
    }
 
    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value})
        // console.log(event.target.value)
       
    }
    render(){
        
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
          })
        return(
            <div>
                <h1>ROBOFRIENDS</h1>
                <div>

                 <SearchBox seachChange = {this.onSearchChange} />

                </div>
                
                <CardsArray robots ={filteredRobots}/>

                
            </div>
        );
    }
}

export default App;
