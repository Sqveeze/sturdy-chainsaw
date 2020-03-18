import React from 'react';
import styled from 'styled-components';

const HorizontalScrollbarItem = ({children, active, clickEvent, index}) => {
  const itemRef = React.useRef(null);

  const handleClick = () => {
    clickEvent(itemRef, index);
  }

  React.useEffect(() => {
    if (active) {
      clickEvent(itemRef, index);
    }
  }, [active, index]);

  return (
    <Item ref={itemRef} onClick={handleClick} active={active}>
      {children}
    </Item>
  )
};

const Item = styled.div`
  transition: color 150ms ease-in-out;
  ${props => props.active && ({
    color: 'skyblue'
  })}
  margin: 0 12px;
  display: inline-block;
  cursor: pointer;
`;

export default HorizontalScrollbarItem;