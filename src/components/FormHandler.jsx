import styled from "styled-components";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

export default function Form(props){
    const navigate = useNavigate();  
    const url = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";

    function updateBuyer(p){
        props.setBuyer(p);
        props.setSeatObject({ids: props.seatObject.ids, name: p, cpf: props.seatObject.cpf});
    }

    function updateCpf(p){
        props.setCpf(p);
        props.setSeatObject({ids: props.seatObject.ids, name: props.seatObject.name, cpf: p});
    }

    function postSeats(){
        const promise = axios.post(url, props.seatObject);
        promise.then(()=>{navigate("/sucesso")});
        promise.catch(console.log("erro"));
    }

    function sendForm(event){
        event.preventDefault();
        postSeats();
    }

    //substituir link por navigate
    return(
        <FormContainer onSubmit={sendForm}>
                <label htmlFor="buyer">
                    Nome do comprador:
                </label>
                <input 
                    required 
                    placeholder="Digite seu nome..."   
                    id="buyer" 
                    value={props.buyer} 
                    onChange={e => updateBuyer(e.target.value)} 
                    data-test="client-name"
                />

                <label htmlFor="cpf">
                    CPF do comprador:
                </label>
                <input 
                    required 
                    placeholder="Digite seu CPF..." 
                    id="cpf" 
                    value={props.cpf} 
                    onChange={e => updateCpf(e.target.value)} 
                    data-test="client-cpf"
                />

                    <button 
                        type="submit"
                        data-test="book-seat-btn"
                    >
                        Reservar Assento(s)
                    </button>    
                
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
        margin-top: 30px;

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