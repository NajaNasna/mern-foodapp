import React from 'react'
import { useCart, useDispatchCart } from '../components/ContextReducer'

function Cart() {

    let data= useCart();
    let dispatch = useDispatchCart();
    if(data.length===0){
        return(
            <div style={{maxWidth:"100%"}}>
                <div className='m-5 text-center fs-3' >The Cart is Empty!</div>
            </div>
        )
    }

    const handleCheckOut = async()=>{
        let userEmail = localStorage.getItem("userEmail");
        let response = await fetch("http://127.0.0.1:5000/api/orderData",{
            method:"POST",
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                order_data : data,
                email: userEmail,
                order_date: new Date().toDateString()
            })
        });

        console.log("Order Response:", response)
        if(response.status === 200){
            dispatch({type: "DROP"})
        }

    }

    let totalPrice = data.reduce((total,food) => total + food.price, 0)

  return (
    <div style={{height:"100%"}}>
        <div className='container m-auto table-responsive table-responsive-sm table-responsive-md cart-table-div'>
            <table className='table table-hover'>
                <thead className=' fs-4'>
                    <tr>
                        <th scope='col' >#</th>
                        <th scope='col'  >Name</th>
                        <th scope='col' >Quantity</th>
                        <th scope='col' >Option</th>
                        <th scope='col' >Amount</th>
                        <th scope='col' ></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((food,index)=>(
                        <tr>
                            <th scope='row'>{index+1}</th>
                            <td>{food.name}</td>
                            <td>{food.qty}</td>
                            <td>{food.size}</td>
                            <td>{food.price}</td>
                            <td><button type='button' className='btn p-0'>
                                <img src={'./images/trash.png'} style={{width:"25px", height:"25px"}} alt="" onClick={()=> {dispatch({type:"REMOVE", index:index}) }} /></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div><h1>Total Price: {totalPrice}/- </h1></div>
            <div>
                <button className='btn bg-success mt-5' onClick={handleCheckOut}>Check Out</button>
            </div>
        </div>
    </div>
  )
}

export default Cart