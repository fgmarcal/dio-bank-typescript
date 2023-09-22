import React from 'react'
import { useParams } from 'react-router-dom';
import { IUser } from '../../pages/account/types';
import { db } from '../../database/database';


const Balance:React.FC= ({user, account, balance }:IUser) => {

    const {username} = useParams();
    user = username?.slice(1);

    if(user){
        for(let i = 0; i < db.length; i++){
            if(user === db[i].user){
                account = db[i].account;
                balance = db[i].balance;
            }
        }
    }

  return (
    <>
    <div>
        <h1>{`Your balance: $ ${balance}`}</h1>
        <h3>{`Account number: ${account}`}</h3>
    </div>
    </>
  )
}

export default Balance;