import React, { useContext, useEffect, useState } from 'react'
import {TransactionContext} from "./TransContext"

function Child(props) {
    let {transaction,addtranstion} =useContext(TransactionContext)
    console.log(transaction)

    let [newDesc, setNewDesc] = useState('');
    let [newAmount, setNewAmount] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        addtranstion({ amount: Number(newAmount), desc: newDesc })
    }

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transaction.length; i++) {
            if (transaction[i].amount > 0)
                income += transaction[i].amount
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transaction.length; i++) {
            if (transaction[i].amount < 0)
                expense += transaction[i].amount
        }
        return expense;
    }

   
  return (
      <div className='container layout mx-auto shadow-lg p-3 mb-5 bg-white rounded mt-5 p-5' >
  <h1 className='text-center'>Expense Tracker</h1>  
    <h3>Your Balances <br></br> {getIncome() + getExpense()}</h3 >
    <div className='d-flex justify-content-between shadow-lg p-2 mb-1 bg-white rounded'>
        <h3>Income <br/> {getIncome()}</h3>
        <h3>Expense <br/> {getExpense()}</h3>
    </div>
    <h3>History</h3>
    <hr></hr>
   
    <ul className='list-unstyled'>
        {transaction &&
            transaction.map((data,index)=>{
                return(
                <li className='d-flex justify-content-between align-items-center shadow-lg p-2 mb-1 bg-white rounded'>
            <h5>{data.desc}</h5>
            <h4>{data.amount}</h4>
        </li>
        )

            })
        }
    </ul>

    <h3>Add new Traction</h3>
    <hr></hr>
    <form onSubmit={handleSubmit}>
        <label>Add Description
        <br></br>
        <input type="text" required onChange={(e) => setNewDesc(e.target.value)} />
    
        </label>
        <br ></br>
        <label className='my-3'>Add Amount
        <br></br>
        <input type="number" required onChange={(e) => setNewAmount(e.target.value)} />
        </label>
        <br></br>

        <input className='mt-5' type="submit" value="Add Amount"></input>

    </form>

    </div>
  )
}

export default Child