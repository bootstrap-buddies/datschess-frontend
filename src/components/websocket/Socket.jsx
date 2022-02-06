import * as React from 'react';
import ChessBoard from '../chessboard/Chessboard';

class Socket extends React.Component {

    // instance of websocket connection as a class property
    ws = new WebSocket('ws://localhost:8000/Chess')

    componentDidMount() {
        this.ws.onopen = () => {
        // on connecting, do nothing but log it to the console
        console.log('connected')
        }

        this.ws.onmessage = evt => {
        // listen to data sent from the websocket server
        const message = JSON.parse(evt.data)
        this.setState({dataFromServer: message})
        console.log(message)
        }

        this.ws.onclose = () => {
        console.log('disconnected')
        // automatically try to reconnect on connection loss

        }

    }

    render(){
        return(
            <ChessBoard websocket={this.ws} />
        )}
}

export default Socket;