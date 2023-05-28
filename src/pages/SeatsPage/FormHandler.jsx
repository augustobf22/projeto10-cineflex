import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

export default function Form(props){
    const navigate = useNavigate();  
    
    function sendForm(event){
        event.preventDefault();
        navigate(`/success`);
    }

    //substituir link por navigate
    return(
        <FormContainer onSubmit={sendForm}>
                <label htmlFor="buyer">
                    Nome do comprador:
                </label>
                <input required placeholder="Digite seu nome..." id="buyer" value={props.buyer} onChange={e => props.setBuyer(e.target.value)} />

                <label htmlFor="cpf">
                    CPF do comprador:
                </label>
                <input required placeholder="Digite seu CPF..." id="cpf" value={props.cpf} onChange={e => props.setCpf(e.target.value)} />

                <button type="submit">Reservar Assento(s)</button>
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
        width: 225px;
        height: 42px;

        background-color: #E8833A;
        color: white;
        border-radius: 3px;
        border: none;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        letter-spacing: 0.04em;

        color: #FFFFFF; 

        &:hover{
            cursor: pointer;
        }
    }
    input {
        width: calc(100vw - 60px);

        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;

        color: #AFAFAF;
    }
`