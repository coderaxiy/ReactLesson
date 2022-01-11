import React from "react";
import './Order.css';


export default class Order extends React.Component{
    render(prop){
            const {data} = this.props
        return(
            <div className='Main'>
                <div className='card card1'>
                    <div className='id'>
                        <button> {data.id} </button>
                        <i class="far fa-bookmark"></i>
                    </div>
                    <div className='time'>
                    <i class="far fa-clock"></i>
                    <p> {data.time} </p>
                    </div>
                </div>
                <div className='card card2'>
                    <div className='name'>
                    <i class="fas fa-user-alt"></i>
                    <div className='title'>
                        <p> {data.name} </p>
                        <p> {data.surname} </p>
                    </div>
                    </div>
                    <div className='phoneNum'>
                    <i class="fas fa-phone-alt"></i>
                    <p> {data.phone} </p>
                    </div>
                    </div>
                <div className='card card3'>
                    <div className='payCost'>
                        <div className='price'>
                            <i class="fas fa-shopping-bag"></i>
                            <p> {data.cost} </p>
                        </div>      
                    <p id='pay'>Payme</p>
                    </div>
                    <div className='deliveryCost'>
                        <i class="fas fa-truck"></i>
                        <p> {data.deliveryCost} </p>
                    </div>
                    <div className='total'>
                        <p>Umumiy Summa</p>
                        <h3> {data.Total} <span>UZS</span></h3>
                    </div>
                </div>
                <div className='card card4'>
                    <div className='dispatcher'>
                        <p>Operator:</p>
                        <h4> {data.dispatch} </h4>
                    </div>
                    <div className='branch'>
                        <p>Fililal:</p>
                        <h4> Fast Food <br></br> {data.branch} </h4>
                    </div>
                </div>
            </div>
        )
    }
}

