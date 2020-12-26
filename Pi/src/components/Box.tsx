import * as React from 'react';
import { Link } from 'react-router-dom';
import './Box.css';



const Box = (title:string,context:string,date:string,isOpen:boolean,headerImage:string) => (
   <div>
      <div className="card">
         <Link to='/hackathondetail'>
            <div className="card-header">
               <img src={headerImage} alt="photo" />
            </div>
         </Link>
         <div className="card-body">
         <span className={`tag ${isOpen ? 'tag-teal' : 'tag-pink'}`}>{isOpen ? 'Başvurular Açık' : 'Başvurular Kapalı'}</span>
            <Link to='/hackathondetail'>
               <h4>{title}</h4>
            </Link>
            <p>
              {context}
           </p>
            <div className="date">
               
               <div className="date-info">
                  <small>{date}</small>
               </div>
            </div>
         </div>
      </div>
   </div>

);

export default Box