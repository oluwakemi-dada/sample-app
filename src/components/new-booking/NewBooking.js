import React from 'react';
import styled from 'styled-components';
import Navbar from '../../sub-components/Navbar';
import { FaArrowLeft } from 'react-icons/fa';
import Service from './Service';
import Location from './Location';
import CargoDetails from './CargoDetails';
import AdditionalServices from './AdditionalServices';

const MainHeading = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const ArrowLeft = styled.div`
  width: 15rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1400px) {
    width: 10rem;
  }

  @media (max-width: 1200px) {
    width: 7rem;
  }

  > * {
    margin-left: 4rem;
    cursor: pointer;

    @media (max-width: 1200px) {
      margin-left: 2rem;
    }
  }
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

  @media (max-width: 1400px) {
    margin-left: 10rem;
  }

  @media (max-width: 1200px) {
    margin-left:  7rem;
  }
`;

const Container = styled.div`
  margin: 4rem 15rem;

  @media (max-width: 1400px) {
    margin: 4rem 10rem;
  }

  @media (max-width: 1200px) {
    margin: 4rem 7rem;
  }
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
      <Container>
        <Service />
        <Location />
        <CargoDetails />
        <AdditionalServices />
      </Container>
    </div>
  );
};

export default NewBooking;
