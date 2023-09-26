import { useContext } from 'react';
import { Container, Wrapper } from './styles';
import { Link, useParams } from 'react-router-dom';
import { AppContext } from '../context/context';

interface IHead {
    user? : string,
    log? : boolean,
}

const MyHeader = ({user, log}: IHead) => {

    const {logged} = useContext(AppContext);

    const {username} = useParams();
    user = username?.slice(1);

    if(user&&logged){
        log = true;
    }else{
        log = false;
    }
    return (
        <>
            <Container>
                <Wrapper>
                    <h1>MyBank</h1>
                    <p> {log? `Bem-vindo, ${user}` : ``}</p>
                </Wrapper>
                {log? <Link to={'/'} style={{color:"white", paddingLeft:"2rem"}}>Logout</Link> : null}
            </Container>
        </>
    )
}

export default MyHeader