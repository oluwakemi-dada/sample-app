import React from 'react';
import styled from 'styled-components';
import Navbar from '../sub-components/Navbar';
import { FaArrowLeft } from 'react-icons/fa';

const MainHeading = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const ArrowLeft = styled.div`
  width: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainHeadingTitle = styled.div`
  h1 {
    font-size: 2rem;
    font-weight: 500;
  }
`;

const HeadingParagraph = styled.p`
  margin-left: 15rem;
  font-weight: 300;
  margin-top: 1rem;
`;

const NewBooking = () => {
  return (
    <div>
      <Navbar />
      <MainHeading>
        <ArrowLeft>
          <FaArrowLeft />
        </ArrowLeft>
        <MainHeadingTitle>
          <h1>New Booking</h1>
        </MainHeadingTitle>
      </MainHeading>
      <HeadingParagraph>
        Fill in the information below to get a quote or create a new booking
      </HeadingParagraph>
    </div>
  );
};

export default NewBooking;
