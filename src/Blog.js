import React, { Component } from 'react';
import BlogCard from './BlogCard';
import Profile from './Profile';


class Blog extends Component{
    render(){
        return(
            <div>
                <h1>
                    this is blog page
                </h1>
                <BlogCard />
                <Profile />
                
            </div>
            
        )
    }
}

export default Blog;