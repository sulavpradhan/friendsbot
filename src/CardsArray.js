import { div } from 'prelude-ls';
import React from 'react';
import Card from './Card';
// import Blog from './Blog';
import { Link } from 'react-router-dom';



const CardsArray = ({ robots }) => {
    return (
      <div>
        {
          robots.map((user, i) => {
            return (

              <Link to ='/Blog'>
                  <Card
                  key={i}
                  id={robots[i].id}
                  name={robots[i].name}
                  email={robots[i].email}
                />
             </Link>
              
                      
              
            );
          })
        }
      </div>
    );
  }
  


  
export default CardsArray;
