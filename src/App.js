import { div } from 'prelude-ls';
import React , {Component} from 'react';
import CardsArray from './CardsArray';
import SearchBox from './SearchBox';
import {robots} from './robots';
import './App.css';
// import Blog from './Blog';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



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
        console.log(event.target.value)
       
    }
    render(){
        
        const filteredRobots = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
          })
        return(
            // <Router>
                <div>
                    {/* <Switch> */}
                        <h1>ROBOFRIENDS</h1>
                        <SearchBox searchChange = {this.onSearchChange} />
                        <CardsArray robots ={filteredRobots}/>
                        {/* <Route path="/Blog"  component={Blog}/>  */}
                    {/* </Switch> */}
                    

                    
                </div>
            // </Router>
        );
    }
}

export default App;
