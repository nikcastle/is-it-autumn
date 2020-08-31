import React from "react";
import InfoCard from "../components/InfoCard";
import { Col, Row } from "reactstrap";
import styled from "styled-components";
import forestRoad from "../images/forest-road.png";
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'


const StyleWrapper = styled.article`
    background-attachment: fixed;
    background-image: url(${forestRoad});
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100vw;

    h1 {
        align-items: center;
        color: #fdfbd9;
        font-size: 100px;
        padding-top: 300px;
        text-align: center;
        text-shadow: -10px -3px  5px #734024;
    }

    footer {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        text-align: center;
    }
    `

const Autumn = () => {

    const { width, height } = useWindowSize()


    return (
        <StyleWrapper>
            <Confetti
                width={width}
                height={height}
                colors={["#ac5423", "#d37e23", "#6d3a23", "#ac5423", "#734024", "#a37132", "#4d5521"]}
                wind={0.005}
                gravity={0.01}
                numberOfPieces={100}
                friction={0.975}
    />
            <Row>
                <Col>
                    <h1>YES!</h1>
                </Col>
            </Row>
            <footer>
                <Row>
                    {/* <Col md={{size: 2, offset: 1}}>
                        <InfoCard 
                        name="Stay Spooky"
                        description="How to stay spooky"
                        link="test link
                        "/>
                    </Col> */}
                    <Col md={{size: 5, offset: 2}}>
                        <InfoCard
                        name="Stay Spooky"
                        description="The Halloween tradition originated with the ancient Celtic festival of Samhain (pronounced sow-in), when people would light bonfires and wear costumes to ward off ghosts."
                        link="https://www.history.com/topics/halloween/history-of-halloween"
                        />
                    </Col>
                    <Col md={2}>
                        <InfoCard 
                        name="Happy Harvest"
                        description="The Autumn Equinox is the first day of the autumn season and occurs when the sun passes the equator moving from the northern to the southern hemisphere. The North Pole begins to tilt away from the sun. Day and night have approximately the same length. Autumnal equinox is near 22 September."
                        link="https://www.britannica.com/science/autumnal-equinox"
                        />
                    </Col>
                </Row>
            </footer>
        </StyleWrapper>
    )

}

export default Autumn;