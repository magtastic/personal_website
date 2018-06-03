import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: row;
  background-color: rgb(207,207,207);
  background: rgb(207,207,207);
  background: -webkit-linear-gradient(to bottom, rgb(207,207,207), rgb(229,229,229));
  background: linear-gradient(to bottom, rgb(207,207,207), rgb(229,229,229));
  padding-left: 6px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  @media only screen 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
  border-top-left-radius: 3.5px;
  border-top-right-radius: 3.5px;
  }
`;

const buttonRadius = 7;

const Button = styled.div`
  background: ${param => param.color};
  width: ${buttonRadius * 2}px;
  height: ${buttonRadius * 2}px;
  border-radius: ${buttonRadius}px;
  margin: 6px;
  margin: 6px 3px 6px 3px;
  @media only screen 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
  width: ${buttonRadius}px;
  height: ${buttonRadius}px;
  border-radius: ${buttonRadius / 2}px;
  margin: 3px;
  margin: 3px 1.5px 3px 1.5px;
  }
`;

export default () => (
  <Container>
    <Button color="rgb(255,59,48)" />
    <Button color="rgb(225, 204,0)" />
    <Button color="rgb(76,217,100)" />
  </Container>
);
