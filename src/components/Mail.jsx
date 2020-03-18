import React from 'react';
import styled from 'styled-components';
import anime from 'animejs/lib/anime.es.js';

import { Row, Col } from '../layout/Default';

import { FaPaperclip, FaAngleDoubleRight } from "react-icons/fa";

const Mail = ({from, title, date, text}) => {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const dropdownEl = React.useRef(null);
  const dropdownEl2 = React.useRef(null);
  const iconEl = React.useRef(null);
  const handleClick = () => {
    let tl = anime.timeline({
      easing: 'easeInOutSine',
      duration: 150
    });
    anime({
      targets: iconEl.current,
      rotate: !open ? '90deg' : 0,
      easing: 'easeInOutSine',
      duration: 100
    });
    if (!open) {
      tl
        .add({
          targets: dropdownEl.current,
          height: dropdownEl.current.scrollHeight,
          opacity: 1,
        })
        .add({
          targets: dropdownEl2.current,
          height: dropdownEl2.current.scrollHeight,
          opacity: 1,
        });
    } else {
      tl
        .add({
          targets: dropdownEl2.current,
          height: 0,
          opacity: 0,
        })
        .add({
          targets: dropdownEl.current,
          height: 0,
          opacity: 0,
        });
    }
    setOpen(!open);
    setOpen2(!open2);
  }

  return (
    <Row no-gutters>
      <Col auto classes="mx-2">
        <FaPaperclip />
      </Col>
      <Col>
        <Row no-gutters classes="align-items-center">
          <Col>
            <Sender>
              {from}
            </Sender>
          </Col>
          <Col auto classes="pr-2">
            <Date>
              {date}
            </Date>
          </Col>
          <Col auto>
            <IconContainer onClick={handleClick}>
              <Icon ref={iconEl}>
                <FaAngleDoubleRight size={16} color="skyblue" />
              </Icon>
            </IconContainer>
          </Col>
        </Row>
        <Row no-gutters>
          <Col cols={12}>
            {title}
          </Col>
        </Row>
        <Row no-gutters>
          <Col cols={12}>
            {text}
          </Col>
        </Row>
        <Row no-gutters>
          <Col cols={12}>
            <Line />
          </Col>
        </Row>
      </Col>
      <Col cols={12} ref={dropdownEl} style={{overflow: 'hidden', height: 0, opacity: 0}}>
        <Row no-gutters>
          <Col auto classes="mx-2">
            <FaPaperclip />
          </Col>
          <Col>
            <Row no-gutters>
              <Col>
                <Sender>
                  {from}
                </Sender>
              </Col>
              <Col auto>
                <Date>
                  {date}
                </Date>
              </Col>
            </Row>
            <Row no-gutters>
              <Col cols={12}>
                {title}
              </Col>
            </Row>
            <Row no-gutters>
              <Col cols={12}>
                <Line />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col cols={12} ref={dropdownEl2} style={{overflow: 'hidden', height: 0, opacity: 0}}>
        <Row no-gutters>
          <Col auto classes="mx-2">
            <FaPaperclip />
          </Col>
          <Col>
            <Row no-gutters>
              <Col>
                <Sender>
                  {from}
                </Sender>
              </Col>
              <Col auto>
                <Date>
                  {date}
                </Date>
              </Col>
            </Row>
            <Row no-gutters>
              <Col cols={12}>
                {title}
              </Col>
            </Row>
            <Row no-gutters>
              <Col cols={12}>
                <Line />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

const IconContainer = styled.div`
  height: 16px;
  background-color: lightgrey;
  cursor: pointer;
  svg {
    vertical-align: top;
  }
`;

const Icon = styled.div`
  height: 16px;
  width: 16px;
`;

const Sender = styled.h4`
  margin: 0;
`;

const Date = styled.h5`
  color: grey;
  margin: 0;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: lightgrey;
`;

export default Mail;