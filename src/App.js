import React from 'react';
import styled from 'styled-components';

import { Row, Col } from './layout/Default';

import MailList from './components/MailList';
import HorizontalScrollbar from './components/HorizontalScrollbar';
import ArrayOperations from './components/ArrayOperations';

const App = () => {

  const mails = [{
    from: "Lorem Ipsum",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2017. 09. 19",
  }, {
    from: "Lorem Ipsum",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2017. 09. 19",
  }, {
    from: "Lorem Ipsum",
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    date: "2017. 09. 19",
  }]

  return (
    <Row no-gutters classes="py-5 my-5">
      <Col cols={12}>
        <Wrapper>
          <MailList
            list={mails}
          />
        </Wrapper>
      </Col>
      <Col cols={12} classes="py-5">
        <WrapperWide>
          <HorizontalScrollbar />
        </WrapperWide>
      </Col>
      <Col cols={12} classes="py-5">
        <WrapperWide>
          <ArrayOperations />
        </WrapperWide>
      </Col>
    </Row>
  );
};

const Wrapper = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;

const WrapperWide = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export default App;
