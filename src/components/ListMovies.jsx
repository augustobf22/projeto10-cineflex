import styled from "styled-components";
import { useEffect } from 'react';
import {Link} from "react-router-dom";
import loading from '../assets/loading.gif';
import axios from 'axios';

export default function MoviesList(props){
    useEffect(() => {
		const request = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

		request.then(r => {
			props.setMovie(r.data);
		});
	}, []);

    if(props.movie === null) {
		return <img src={loading} />;
	}

    return(
        <>
            {props.movie.map(m => (
                <MovieContainer key={m.id} data-test="movie">
                    <Link to={`/sessoes/${m.id}`}>
                        <img src={m.posterURL} alt="poster" onClick={() => {props.setMovie(m)}}/>
                    </Link>
                </MovieContainer>
                ))
            }
        </>
    )
}

const MovieContainer = styled.div`
    width: 145px;
    height: 210px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    img {
        width: 130px;
        height: 190px;
    }
`