import styled from "styled-components"
import {Link} from "react-router-dom"
import { useEffect } from 'react';
import loading from '../../assets/loading.gif';
import axios from 'axios';

//request sessions list with axios

export default function SessionsList(props){
    const movieId = props.movie.id;
    const url = (`https://mock-api.driven.com.br/api/v8/cineflex/movies/${movieId}/showtimes`);

    useEffect(() => {
		const request = axios.get(url);

		request.then(r => {
            console.log(r.data);
			props.setSessionsList(r.data);
		});
	}, []);

    if(props.sessionsList === null) {
		return <img src={loading} />;
	}

    function sessionInfo(day, t){
        props.setSession(day);
        props.setTime(t);
    }

    return(
        <>
            {props.sessionsList.days.map(day =>
                <SessionContainer key={day.id}>
                    {day.weekday} - {day.date}
                    <ButtonsContainer >
                        {day.showtimes.map(t => 
                            <Link to={`/seats/${t.id}`} key={t.id}>
                                <button  onClick={e => sessionInfo(day, t)}>{t.name}</button>
                            </Link>
                        )}
                    </ButtonsContainer>                   
                </SessionContainer>
                )}
        </>
    )
}

const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;

    gap: 20px;
    button {
        width: 83px;
        height: 43px;

        background: #E8833A;
        border-radius: 3px;
        border: none;
        
        font-family: Roboto;
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0.02em;
        text-align: center;
        color: white;

        &:hover{
            cursor: pointer;
        }
    }
    a {
        text-decoration: none;
    }
`

                