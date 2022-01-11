import React from 'react';
import './App.css';
import Order from './Order';

const orders = [
  {id:1234, time:'00:24', name:'Muhammad', surname:'Jumayev', phone:'(99893) 461-41-88', cost:'35400 UZS', deliveryCost:'5000 UZS', Total:'40400', dispatch:'Komilova M', branch:'Maksim Gorkiy'},
  {id:1234, time:'11:24', name:'John', surname:'McGoy', phone:'(99893) 461-41-88', cost:'35400 UZS', deliveryCost:'5000 UZS', Total:'40400', dispatch:'Komilova M', branch:'Maksim Gorkiy'},
  {id:1234, time:'12:24', name:'Kim', surname:'Park', phone:'(99893) 461-41-88', cost:'35400 UZS', deliveryCost:'5000 UZS', Total:'40400', dispatch:'Komilova M', branch:'Maksim Gorkiy'},
  {id:1234, time:'04:24', name:'Jimmy', surname:'Bobson', phone:'(99893) 461-41-88', cost:'35400 UZS', deliveryCost:'5000 UZS', Total:'40400', dispatch:'Komilova M', branch:'Maksim Gorkiy'},
]
class App extends React.Component {
  render(){
    return(
      <div className='container'>
        {
          orders.map((value,index)=>{
            return(
              <Order 
                data = {value}
               />
            )
          })
          
        }
               
      </div>
    )
  }
}

export default App;
