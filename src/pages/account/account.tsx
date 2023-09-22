
import { useParams } from "react-router-dom";
import MyHeader from "../../components/header/header";
import { IUser } from "./types";


const Account = ({user, account, balance}:IUser) => {

    const {username} = useParams()
    
    user = username?.slice(1);

    return (
        <>
            <MyHeader user={user}/>
            <div>
                <h1>
                    {`Hello, ${user}`}
                </h1>
            </div>
        </>
    )
}

export default Account;
