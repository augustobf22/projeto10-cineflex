import styled from "styled-components";
import { Link } from 'react-router-dom';

export default function Form(props){
    function sendForm(event){
    event.preventDefault();    
    }

    //substituir link por navigate
    return(
        <FormContainer onSubmit={sendForm}>
                <label htmlFor="buyer">
                    Nome do Comprador:
                </label>
                <input placeholder="Digite seu nome..." id="buyer" value={props.buyer} onChange={e => props.setBuyer(e.target.value)}/>

                <label htmlFor="cpf">
                    CPF do Comprador:
                </label>
                <input placeholder="Digite seu CPF..." id="cpf" value={props.cpf} onChange={e => props.setCpf(e.target.value)}/>

                <Link to={`/success`}>
                    <button type="submit">Reservar Assento(s)</button>
                </Link>
        </FormContainer>
    )
}

const FormContainer = styled.form`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`