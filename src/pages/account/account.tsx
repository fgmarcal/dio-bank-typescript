
import { useNavigate } from "react-router-dom";
import MyHeader from "../../components/header/header";
import { IUser } from "./types";
import Balance from "../../components/balance/balance";
import { useContext } from "react";
import { AppContext } from "../../components/context/context";


const Account = ({user, account, balance}:IUser) => {
    const {logged, username} = useContext(AppContext)
    const navigate = useNavigate();

    !logged ?? navigate('/')
    
    user = username?.slice(1);

    return (
        <>
            <MyHeader user={user}/>
            <div>
                <h1>
                    {`Hello, ${user}`}
                </h1>
            </div>
            <Balance />
        </>
    )
}

export default Account;
