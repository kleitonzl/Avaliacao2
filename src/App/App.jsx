import React from 'react'
import Card from '../Card/Card'
import "./App.css"
import icon from '../../classificacao-interativa/images/icon-star.svg'


const App = ()=>{
    const  [color,setColor]= React.useState('')
  return(
    <>
   <Card
   icon={icon}
   title="How did we do?"
   text="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
   button="Submit"

   />
   
</> 
    
  )
}
export default App;