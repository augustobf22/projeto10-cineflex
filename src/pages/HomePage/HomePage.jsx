import styled from "styled-components"
import MoviesList from '../../components/ListMovies.jsx'

export default function HomePage(props) {
    return (
        <PageContainer>
            Selecione o filme

            <ListContainer>
                <MoviesList movie={props.movie} setMovie={props.setMovie}/>
            </ListContainer>

        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-top: 70px;
`
const ListContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`