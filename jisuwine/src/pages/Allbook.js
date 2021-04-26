import {Link} from 'react-router-dom'

const Allwines = (props) =>{
    return(
       <div>
           {props.wine.length > 0 ?
               <ul>
                   {props.wine.map((data)=>{
                       return(
                           <li key={data.id}>
                               <Link to={`/wine/${data.id}`}>
                                   {data.title}
                               </Link>
                           </li>
                       )
                   })}
               </ul>
           
               :
               <p>loading</p>
           }           
       </div> 
        
    )
}

export default Allwines