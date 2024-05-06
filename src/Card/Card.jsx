import Options from '../Options/Options'
import './Card.css'

const Card = ({text,icon,title,button}) =>{

    return(
        <div className="card">
        <img src={icon} alt="" />
        <h1>{title}</h1>
        <p>{text}</p>
         <button>{button}</button>
         <Options 
         numero="1"/>
          <Options 
         numero="2"/>
          <Options 
         numero="3"/>
          <Options 
         numero="4"/>
          <Options 
         numero="5"/>
        </div>
    )
}
export default Card