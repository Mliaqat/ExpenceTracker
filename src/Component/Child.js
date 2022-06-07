import React, { useContext, useEffect, useState } from 'react'
import {TransactionContext} from "./TransContext"

function Child() {
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
      <div className='container layout mx-auto' >
  <h1 className='text-center'>Expense Tracker</h1>  

    <h2>Your Balances <br></br> {getIncome() + getExpense()}</h2 >
    <div className='d-flex justify-content-between'>
        <h2>Income <br/> {getIncome()}</h2>
        <h2>Expense <br/> {getExpense()}</h2>
    </div>
    <h2>History</h2>
    <hr></hr>
   
    <ul className='list-unstyled'>
        {transaction &&
            transaction.map((data,index)=>{
                return(
                <li className='d-flex justify-content-between align-items-center'>
            <h5>{data.desc}</h5>
            <h4>{data.amount}</h4>
        </li>
        )

            })
        }
    </ul>

    <h2>Add new Traction</h2>
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