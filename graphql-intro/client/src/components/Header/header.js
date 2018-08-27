import React from 'react';
import styled from 'react-emotion';

const HeaderWrapper = styled('header')`
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px 0;
  width: 100%;
  background: #4E0250;
`;

const Container = styled('div')`
  display: flex;
  align-items: center;
  width: 950px;
  margin: 0 auto;

  & > * {
    flex: 1;
  }
`;

const Title = styled('h1')`
  color: white;
`;

const InputSearch = styled('input')`
  padding: 10px;
  width: 250px;
  outline: none;
  border: none;
  font-size: 14px;
  background: white;
`;

const Header = () => (
  <HeaderWrapper>
    <Container>
      <Title>GraphQL Client</Title>
      <InputSearch 
        type="search"
        placeholder="Search on github and youtube" />
    </Container>
  </HeaderWrapper>
);

export default Header;
