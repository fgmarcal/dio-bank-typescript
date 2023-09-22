import { Container, Wrapper } from './styles';
import { Link, useParams } from 'react-router-dom';

interface IHead {
    user? : string,
    logged? : boolean,
}

const MyHeader = ({user, logged}: IHead) => {
    const {username} = useParams();
    user = username?.slice(1);

    if(user){
        logged = true;
    }else{
        logged = false;
    }
    return (
        <>
            <Container>
                <Wrapper>
                    <h1>MyBank</h1>
                    <p> {logged? `Bem-vindo, ${user}` : ``}</p>
                </Wrapper>
                {logged? <Link to={'/'} style={{color:"white", paddingLeft:"2rem"}}>Logout</Link> : null}
            </Container>
        </>
    )
}

export default MyHeader