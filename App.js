import React, { useState } from 'react'
import Icon from './Icon'
import { ToastContainer, toast } from 'react-toastify'; //import react-tostify
import 'react-toastify/dist/ReactToastify.css';
import { Button, Container, Card, CardBody, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';  //import reactstrap
import './index.css';

const tiktacArray = new Array(9).fill("")

const App = () => {
    let [isCross, setIsCross] = useState(true)
    let [winMsg, setWinMsg] = useState('')
    

    const playAgain = () => {
        setIsCross(true);
        setWinMsg("");
        tiktacArray.fill("");
    }

    const findWinner = () => {
        if (tiktacArray[0] == tiktacArray[1] && tiktacArray[0] == tiktacArray[2] && tiktacArray[0] != "") {
            setWinMsg(tiktacArray[0] + ' has won')
        } else if (tiktacArray[3] == tiktacArray[4] && tiktacArray[3] == tiktacArray[5] && tiktacArray[3] != "") {
            setWinMsg(tiktacArray[3] + ' has won')
        } else if (tiktacArray[6] == tiktacArray[7] && tiktacArray[6] == tiktacArray[8] && tiktacArray[6] != "") {
            setWinMsg(tiktacArray[6] + ' has won')
        } else if (tiktacArray[0] == tiktacArray[3] && tiktacArray[0] == tiktacArray[6] && tiktacArray[0]) {
            setWinMsg(tiktacArray[0] + ' has won')
        } else if (tiktacArray[1] == tiktacArray[4] && tiktacArray[1] == tiktacArray[7] && tiktacArray[1]) {
            setWinMsg(tiktacArray[1] + ' has won')
        } else if (tiktacArray[2] == tiktacArray[5] && tiktacArray[2] == tiktacArray[8] && tiktacArray[2]) {
            setWinMsg(tiktacArray[2] + ' has won')
        } else if (tiktacArray[0] == tiktacArray[4] && tiktacArray[0] == tiktacArray[8] && tiktacArray[0]) {
            setWinMsg(tiktacArray[0] + ' has won')
        } else if (tiktacArray[2] == tiktacArray[4] && tiktacArray[2] == tiktacArray[6] && tiktacArray[2]) {
            setWinMsg(tiktacArray[2] + ' has won')
        }
    }
    

   

    const changeItem = (index) => {
        if (winMsg) {
            return toast("Game has already got over", { type: "success" })
        }
        if (tiktacArray[index] == "") {
            tiktacArray[index] = isCross ? "cross" : "circle"
            setIsCross(!isCross)
        }
        else {
            return toast("Open your eyes dude where are you tapping", { type: "error" })
        }
        findWinner()
        
    }

    return (
        <>
            <div>

                <Container className="p-5">
                    <ToastContainer position="bottom-center"></ToastContainer>
                    <Row>
                        <Col md={6} className="offset-md-3">
                            {
                                winMsg ? (
                                    <div>
                                        <h1 className="text-center">
                                            {winMsg}
                                        </h1>
                                        <Button onClick={playAgain}> Play Again</Button>
                                    </div>
                                ) : (
                                    <h1>
                                        <Button className='m-1' onClick={()=>setIsCross()}>X</Button>
                                        <Button onClick={()=>setIsCross(false)} className="m-1"> O </Button> <span> : - </span> 
                                       {isCross? ' X Turn':'O Turn'}
                                    </h1>
                                )
                            }
                            <div className="grid">
                                {tiktacArray.map((value, index) => (
                                    <Card onClick={() => changeItem(index)} key={index}>
                                        <CardBody className='box'>
                                            <Icon choice={tiktacArray[index]} />
                                        </CardBody>
                                    </Card>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default App