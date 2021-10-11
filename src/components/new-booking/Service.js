import React, { useState } from 'react';
import styled from 'styled-components';
import { MdFlight } from 'react-icons/md';
import { IoIosBoat } from 'react-icons/io';
import { FaTruck } from 'react-icons/fa';
import { FaUserNurse } from 'react-icons/fa';

const Wrapper = styled.div`
  background: #fff;
  border-radius: 2px;
  padding: 4rem 4rem 5rem 4rem;
  margin-bottom: 2rem;
`;

const Heading = styled.div`
  font-weight: 500;
  font-size: 1.7rem;
`;

const Services = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem;
  align-items: center;
  margin-top: 3rem;

  > * {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 2px;
    padding-left: 2rem;
    height: 7rem;
    transition: all 0.3s;
    cursor: pointer;
    font-size: 1.4rem;

    :hover {
      border: 1px solid #0746a7;
      background: #0746a7;
      color: #fff;
    }

    :hover .service-icon {
      color: #fff;
      transition: all 0.3s;
    }

    div:first-child {
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
`;

const AirService = styled.div`
  border: ${(props) =>
    props.air ? '1px solid #0746a7' : ' 1px solid #bbb6b6'};
  background: ${(props) => (props.air ? '#0746a7' : '#fff')};
  color: ${(props) => (props.air ? '#fff' : '#000')};
`;

const SeaService = styled.div`
  border: ${(props) =>
    props.sea ? '1px solid #0746a7' : ' 1px solid #bbb6b6'};
  background: ${(props) => (props.sea ? '#0746a7' : '#fff')};
  color: ${(props) => (props.sea ? '#fff' : '#000')};
`;

const InlandService = styled.div`
  border: ${(props) =>
    props.inland ? '1px solid #0746a7' : ' 1px solid #bbb6b6'};
  background: ${(props) => (props.inland ? '#0746a7' : '#fff')};
  color: ${(props) => (props.inland ? '#fff' : '#000')};
`;

const CustomsService = styled.div`
  border: ${(props) =>
    props.customs ? '1px solid #0746a7' : ' 1px solid #bbb6b6'};
  background: ${(props) => (props.customs ? '#0746a7' : '#fff')};
  color: ${(props) => (props.customs ? '#fff' : '#000')};
`;

const FlightIcon = styled.div`
  position: absolute;
  bottom: -1.9rem;
  right: -1.5rem;
  color: ${(props) => (props.air ? '#fff' : '#82858e')};

  > * {
    font-size: 6rem;
  }
`;

const SeaIcon = styled.div`
  position: absolute;
  bottom: -1.5rem;
  right: -1.2rem;
  color: ${(props) => (props.sea ? '#fff' : '#82858e')};

  > * {
    font-size: 6rem;
  }
`;

const InlandIcon = styled.div`
  position: absolute;
  bottom: -1.5rem;
  right: -0.3rem;
  color: ${(props) => (props.inland ? '#fff' : '#82858e')};

  > * {
    font-size: 6rem;
  }
`;

const CustomsIcon = styled.div`
  position: absolute;
  bottom: -1.5rem;
  right: -2.9rem;
  color: ${(props) => (props.customs ? '#fff' : '#82858e')};

  > * {
    font-size: 6rem;
  }
`;

const Service = () => {
  const [servicee, setServicee] = useState({
    air: false,
    sea: false,
    inland: false,
    customs: false,
  });

  const { air, sea, inland, customs } = servicee;

  const selectService = (serviceType) => {
    if (serviceType === 'air') {
      setServicee({
        air: !air,
        sea: false,
        inland: false,
        customs: false,
      });
    } else if (serviceType === 'sea') {
      setServicee({
        air: false,
        sea: !sea,
        inland: false,
        customs: false,
      });
    } else if (serviceType === 'inland') {
      setServicee({
        air: false,
        sea: false,
        inland: !inland,
        customs: false,
      });
    } else if (serviceType === 'customs') {
      setServicee({
        air: false,
        sea: false,
        inland: false,
        customs: !customs,
      });
    }
  };

  return (
    <Wrapper>
      <Heading>Select a service</Heading>

      <Services>
        <AirService
          onClick={() => {
            selectService('air');
          }}
          air={air}
        >
          <div>Air Freight</div>
          <FlightIcon className='service-icon' air={air}>
            <MdFlight />
          </FlightIcon>
        </AirService>

        <SeaService
          onClick={() => {
            selectService('sea');
          }}
          sea={sea}
        >
          <div>Sea Freight</div>
          <SeaIcon className='service-icon' sea={sea}>
            <IoIosBoat />
          </SeaIcon>
        </SeaService>

        <InlandService
          onClick={() => {
            selectService('inland');
          }}
          inland={inland}
        >
          <div>
            Inland <br /> (Truck & Barge)
          </div>
          <InlandIcon className='service-icon' inland={inland}>
            <FaTruck />
          </InlandIcon>
        </InlandService>

        <CustomsService
          onClick={() => {
            selectService('customs');
          }}
          customs={customs}
        >
          <div>
            Customs <br /> Clearance
          </div>
          <CustomsIcon className='service-icon' customs={customs}>
            <FaUserNurse />
          </CustomsIcon>
        </CustomsService>
      </Services>
    </Wrapper>
  );
};

export default Service;
