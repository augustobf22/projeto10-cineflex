import styled from "styled-components"
import {useNavigate} from 'react-router-dom'

export default function SuccessPage(props) {
    //console.log(props);
    //create function to clear all setValues when going back to home and call it on the button
    const navigate = useNavigate();
    
    function reset(){
        navigate(`/`);
        props.setMovie(null);
        props.setSession(null);
        props.setSessionsList(null);
        props.setTime(null);
        props.setSeats([]);
        props.setSeatsList(null);
        props.setSeatObject({ids:"", name:"", cpf:""});
        props.setBuyer("");
        props.setCpf("");
    }

    return (
        <PageContainer>
            <h1>Pedido feito <br /> com sucesso!</h1>

            <TextContainer data-test="movie-info">
                <strong><p>Filme e sessão</p></strong>
                <p>{props.movie.title}</p>
                <p>{props.session.date} - {props.time.name}</p>
            </TextContainer>

            <TextContainer data-test="seats-info">
                <strong><p>Ingressos</p></strong>
                {props.seats.map(s =>
                    <p key={s}>Assento {s}</p>
                    )}
            </TextContainer>

            <TextContainer data-test="client-info">
                <strong><p>Comprador</p></strong>
                <p>Nome: {props.buyer}</p>
                <p>CPF: {props.cpf}</p>
            </TextContainer>

            <button 
                onClick={reset}
                data-test="go-home-btn"
            >
                Voltar para Home
            </button>
            
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    color: #293845;
    margin: 30px 20px;
    padding-bottom: 120px;
    padding-top: 70px;
    a {
        text-decoration: none;
    }
    button {
        margin-top: 50px;
        width: 225px;
        height: 42px;

        background: #E8833A;
        border-radius: 3px;
        border: none;
        color: white;

        &:hover{
            cursor: pointer;
        }
    }
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #247A6B;
    }
`
const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    strong {
        font-size: 24px;
        line-height: 28px;
        font-weight: 700;
        margin-bottom: 10px;
    }
`