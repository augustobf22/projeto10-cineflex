import styled from "styled-components"
import SeatsList from "../../components/ListSeats";
import Form from '../../components/FormHandler';

export default function SeatsPage(props) {
    const sessionId = props.time.id;

    const colors = {
        selected: 
        {background: "#1AAE9E", border: "#0E7D71"},
        available: 
        {background: "#C3CFD9", border: "#7B8B99"}, 
        unavailable: 
        {background: "#FBE192", border: "#F7C52B"}
    };

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <SeatsList sessionId={sessionId} seats={props.seats} setSeats={props.setSeats} seatsList={props.seatsList} setSeatsList={props.setSeatsList} seatObject={props.seatObject} setSeatObject={props.setSeatObject} colors={colors}/>

            <CaptionContainer>
                <CaptionItem>
                    <CaptionCircle color={colors.selected}/>
                    Selecionado
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle color={colors.available}/>
                    Disponível
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle color={colors.unavailable}/>
                    Indisponível
                </CaptionItem>
            </CaptionContainer>

            <Form buyer={props.buyer} cpf={props.cpf} setBuyer={props.setBuyer} setCpf={props.setCpf} seatObject={props.seatObject} setSeatObject={props.setSeatObject}/>

            <FooterContainer data-test="footer">
                <div>
                    <img src={props.movie.posterURL} alt="poster" />
                </div>
                <div>
                    <p>{props.movie.title}</p>
                    <p>{props.session.weekday} - {props.time.name}</p>
                </div>
            </FooterContainer>

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
    padding-bottom: 120px;
    padding-top: 70px;
`
const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionCircle = styled.div`
    border: 1px solid ${props => props.color.border};         // Essa cor deve mudar
    background-color: ${props => props.color.background};    // Essa cor deve mudar
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
`

const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`