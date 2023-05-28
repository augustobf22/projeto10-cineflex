import styled from "styled-components"
import { useEffect } from 'react';
import loading from '../assets/loading.gif';
import axios from 'axios';

export default function SeatsList(props){
    //use props.sessionId to request get with axios
    const sessionId = props.sessionId;
    const url = (`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${sessionId}/seats`);

    useEffect(() => {
		const request = axios.get(url);

		request.then(r => {
			props.setSeatsList(r.data);
		});
	}, []);

    if(props.seatsList === null) {
		return <img src={loading} />;
	}

    function addSeat(s){
        if(!s.isAvailable){
            alert('Esse assento não está disponível!');
        } else if (props.seats.includes(s.name)) {
            let nSeats = [...props.seats];
            nSeats.splice(nSeats.indexOf(s.name), 1);
            props.setSeats(nSeats);

            let nIds = [...props.seatObject.ids];
            nIds.splice(nIds.indexOf(s.id), 1);
            props.setSeatObject({ids: nIds, name:"", cpf:""});
            
        } else {
            let nSeats = [...props.seats, s.name];
            props.setSeats(nSeats);

            let nIds = [...props.seatObject.ids, s.id];
            props.setSeatObject({ids: nIds, name: "", cpf: ""});
        }
    }

    return(
        <SeatsContainer>
            {props.seatsList.seats.map(s => 
                <SeatItem seat={s} colors={props.colors} selected={props.seats} key={s.id} onClick={() => addSeat(s)} data-test="seat">{s.name}</SeatItem>
                )}
        </SeatsContainer>
    )
}

const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

const SeatItem = styled.div`
    background-color: ${props => !props.seat.isAvailable ? props.colors.unavailable.background : ( props.selected.includes(props.seat.name) ? props.colors.selected.background : props.colors.available.background) };
    border: 1px solid ${props => !props.seat.isAvailable ? props.colors.unavailable.border : ( props.selected.includes(props.name) ? props.colors.selected.border : props.colors.available.border) };
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;

    &:hover{
        cursor: pointer;
    }
`