import React from 'react'
import { useParams } from 'react-router-dom';
import { IUser } from '../../pages/account/types';


const Balance:React.FC= ({user, account, balance }:IUser) => {

    const {username} = useParams();
    user = username?.slice(1);

    

  return (
    <>
    </>
  )
}

export default Balance;