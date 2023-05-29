import styled from "styled-components"
import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"
import {useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = 'h9cTZ5tKDUjM9DnmzKRlzeKg';

export default function App() {
    const [movie, setMovie] = useState(null);
    const [sessionsList, setSessionsList] = useState(null);
    const [session, setSession] = useState(null);
    const [time, setTime] = useState(null);
    const [seatsList, setSeatsList] = useState(null);
    const [seats, setSeats] = useState([]);
    const [seatObject, setSeatObject] = useState({ids:"", name:"", cpf:""});
    const [buyer, setBuyer] = useState("");
    const [cpf, setCpf] = useState("");

    return (
        <BrowserRouter>
           <NavContainer>CINEFLEX</NavContainer>
            <Routes>
                <Route path="/" element={<HomePage movie={movie} setMovie={setMovie}/>}/>
                <Route path="/sessoes/:idFilme" element={<SessionsPage movie={movie} sessionsList={sessionsList} setSessionsList={setSessionsList} setSession={setSession} setTime={setTime}/>}/>
                <Route path="/assentos/:idSessao" element={<SeatsPage movie={movie} session={session}  time={time} seats={seats} setSeats={setSeats} seatsList={seatsList} setSeatsList={setSeatsList} buyer={buyer} cpf={cpf} setBuyer={setBuyer} setCpf={setCpf} seatObject={seatObject} setSeatObject={setSeatObject}/>}/>
                <Route path="/sucesso" element={<SuccessPage movie={movie} session={session} time={time} seats={seats} buyer={buyer} cpf={cpf} setMovie={setMovie} setSession={setSession} setSessionsList={setSessionsList} setTime={setTime} setSeats={setSeats} setSeatsList={setSeatsList} setBuyer={setBuyer} setCpf={setCpf} setSeatObject={setSeatObject}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    color: #E8833A;
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
    a {
        text-decoration: none;
        color: #E8833A;
    }
`
