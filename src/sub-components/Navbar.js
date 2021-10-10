import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

const Wrapper = styled.nav`
  background: #0746a7;
  height: 7rem;
  color: #fff;
  display: grid;
  grid-template-columns: 0.16fr 0.32fr 0.52fr;
  align-items: center;
  padding: 0 4rem;
`;

const Logo = styled.div`
  font-size: 1.8rem;

  span {
    font-weight: 200;
    font-size: 1.6rem;
  }
`;

const SearchBar = styled.div`
  background: #3b6ab8;
  display: flex;
  align-items: center;
  height: 3.8rem;
  border-radius: 2px;
  padding: 0 1rem;

  input {
    background: #3b6ab8;
    border: none;
    outline: none;
    color: #fff;
    width: 95%;
    height: 80%;
    padding: 1rem;
    margin-right: 1rem;
  }
`;

const NavButtons = styled.div`
  display: flex;
  justify-self: flex-end;

  div {
    height: 4rem;
    width: 18rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div:first-child {
    border: 1px solid #fff;
    border-radius: 5px;
    transition: all 0.3s;
    cursor: pointer;
    margin-right: 2rem;

    &:hover {
      background: #fff;
      color: #000;
    }
  }

  div:last-child {
    background: #57c583;
    color: #fff;
    border-radius: 5px;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      background: #fff;
      color: #000;
    }
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <Logo>
        send <span>FREIGHT</span>
      </Logo>
      <SearchBar>
        <input type='text' placeholder='Search' />

        <FiSearch style={{ cursor: 'pointer' }} />
      </SearchBar>
      <NavButtons>
        <div>Request Quote</div>
        <div>Book Shipment</div>
      </NavButtons>
    </Wrapper>
  );
};

export default Navbar;
