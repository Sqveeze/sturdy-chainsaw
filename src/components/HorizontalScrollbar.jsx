import React from 'react';
import styled from 'styled-components';

import HorizontalScrollbarItem from './HorizontalScollbarItem';

const HorizontalScrollbar = () => {
  const barRef = React.useRef(null);
  const [barLineWidth, setBarLineWidth] = React.useState(0);
  const [barLinePos, setBarLinePos] = React.useState(0);
  const [items, setItems] = React.useState([{
    name: "Item 1",
    active: true,
  }, {
    name: "Item 2",
    active: false,
  }, {
    name: "Item 3",
    active: false,
  }, {
    name: "Item 4",
    active: false,
  }, {
    name: "Item 5",
    active: false,
  }, {
    name: "Item 6",
    active: false,
  }, {
    name: "Item 7",
    active: false,
  }, {
    name: "Item 8",
    active: false,
  }, {
    name: "Item 9",
    active: false,
  }, {
    name: "Item 10",
    active: false,
  }, {
    name: "Item 11",
    active: false,
  }, {
    name: "Item 12",
    active: false,
  }, {
    name: "Item 13",
    active: false,
  }, {
    name: "Item 14",
    active: false,
  }]);

  const scrollEvent = () => {
    console.log(barRef.current.scrollLeft);
  };

  const handleClick = (ref, idx) => {
    if(ref.current) {
      const size = ref.current.getBoundingClientRect().width;
      const offset = ref.current.offsetLeft;
      setBarLineWidth(size);
      setBarLinePos(offset);
      const itms = [];
      items.forEach((item, index) => {
        const itm = {
          ...item,
        };
        if (index === idx) {
          itm.active = true;
        } else {
          itm.active = false;
        }
        itms.push(itm);
      });
      setItems(itms);
    }
  };

  return (
    <VerticalScrollbarWrapper>
      <Bar ref={barRef} onScroll={scrollEvent}>
        {items.map((item, index) => {
          return (
            <HorizontalScrollbarItem
              key={`${item.name}_${index}`}
              active={item.active}
              index={index}
              clickEvent={handleClick}
            >
              {item.name}
            </HorizontalScrollbarItem>
          )
        })}
        <BarLine width={barLineWidth} pos={barLinePos} />
      </Bar>
    </VerticalScrollbarWrapper>
  );
};

const VerticalScrollbarWrapper = styled.div`
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
`;

const Bar = styled.div`
  padding: 4px 64px;
  white-space: nowrap;
  position: relative;
`;

const BarLine = styled.div`
  transition: left 200ms ease-in-out;
  position: absolute;
  bottom: 2px;
  left: ${props => props.pos}px;
  width: ${props => props.width}px;
  background: skyblue;
  height: 2px;
`;

export default HorizontalScrollbar;
