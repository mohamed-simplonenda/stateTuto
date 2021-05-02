import React, { Component } from 'react'
import Child from './child'



// stateFull
class Parent extends Component {
//  state = {
    
         
//             nom:"Mohamed",
//             Age:28,
//             lastName:"mansour"
          
         
     



//  }
//  HandleChange = (event) =>{
//      this.setState({
//         nom:event.target.value

//      })
//      console.log(this.state.nom)
    

//  }
//  HandleChange1 = (event) =>{
//     this.setState({
      
//        Age:event.target.value

//     })
//     console.log(this.state.age)
   

// }

state={
    tab:[
{        img:'miserables.jpeg',
        title:'les miserables',
        desc:'lorem qqqqqfr,k,,r,'
    },
    {        img:'blanche.png',
        title:'Blanche neige',
        desc:'lorem aaaafr,k,,r,'
    },
    {        img:'pinoc.jpeg',
        title:'pinocchio',
        desc:'lorem f,,,,,,r,k,,r,'
    }
        
    ]
}
 render() {
  return(
   <div>
       {/* <Child name={this.state.nom} age={this.state.Age} lastname={this.state.lastName}/>
       <input onChange={this.HandleChange} type="text" />
       <input onChange={this.HandleChange1} type="text" />
       <input type="text" onChange={e => this.setState({lastName: e.target.value})}></input> */}
  
     {this.state.tab.map(el=>(
         <Child 
         image={el.img}
         titre={el.title}
         description={el.desc}
         
         />
     ))}
       
       
       </div>
    )
   }
 }



export default Parent

// function organise(arr){
//     reducer = (acc, nb) => acc - nb
//   return arr.reduce(reducer)
 
//  }
//  console.log(organise([2,12, 16, 8, 6, 17, 20]))