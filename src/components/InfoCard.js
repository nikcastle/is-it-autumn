import React, { useState } from "react"
import { Button, ButtonLabel, Card, CardBody, CardHeader, Col, Collapse, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import styled from "styled-components";


const StyleModal = styled(Modal)`
    border: 5px solid #dfc140;
    border-radius: 10px;
    width: 100vw;

    .modal-header {
        text-decoration: underline;
        font-family: 'Oldenburg', cursive
    }
    .toggle {
        background-color: #734024;
        border: none;
        color: #fdfbd9
    }

`

const InfoCard = ({ name, description, link }) => {

      const [modal, setModal] = useState(false);
    
      const toggle = () => setModal(!modal);
    
      return (
        <div>
          <Button onClick={toggle} style={{ marginBottom: '1rem' }} name={name} className="toggle">{name}</Button>
          <StyleModal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>{name}</ModalHeader>
            <ModalBody>
                 <p>
                    {description}
                </p>
            </ModalBody>
            <ModalFooter>
                <Button color="link" target="blank" href={link}>Learn More</Button>
            </ModalFooter>
          </StyleModal>
        </div>
      );

};

export default InfoCard;