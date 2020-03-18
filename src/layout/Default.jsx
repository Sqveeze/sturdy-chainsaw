import React from 'react';
import styled from 'styled-components';

const Layout = ({children}) => {
  return (
  <React.Fragment>
    <Row>
      <Col cols={12}>
        {children}
      </Col>
    </Row>
  </React.Fragment>
  )
};

const Container = styled.div.attrs(props => ({
  className: `${props.fluid ? 'container-fluid' : 'container'} ${props.classes}`
}))``;

const Row = styled.div.attrs(props => ({
  className: `${props['no-gutters'] ? 'row no-gutters' : 'row'} ${props.classes}`
}))``;

const Col = styled.div.attrs(props => ({
  className: `${props.auto ? 'col-auto' : props.cols ? `col-${props.cols}` : 'col'} ${props.classes}`
}))``;

export {
  Layout,
  Container,
  Row,
  Col
}