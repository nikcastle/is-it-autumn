import React, { useState } from "react"
import { Button, Card, CardBody, CardHeader, Col, Collapse } from "reactstrap";
import styled from "styled-components";

const StyleWrapper = styled.article`
    card {
        background-color: #e5c080;
        border: none;
    }

    .toggle {
        background-color: #734024;
        border: none;
        color: #fdfbd9
    }
    `

const InfoCard = ({ name, description, link }) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    return (
        <StyleWrapper>
        <Button placement="top" onClick={toggle} style={{ marginBottom: '1rem' }} name={name} className="toggle">{name}</Button>
            <Collapse isOpen={isOpen}>
                <Card>
                    <CardBody>
                        <p>
                        {description}
                        </p>
                    <Button color="link" target="blank" href={link}>Learn More</Button>
                    </CardBody>
                </Card>
            </Collapse>
        </StyleWrapper>
    )
};

export default InfoCard;