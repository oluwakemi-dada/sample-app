import React, { useState } from 'react';
import styled from 'styled-components';

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
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 3rem;
  margin-top: 4rem;
`;

const Item = styled.div`
  display: flex;

  > *:first-child {
    height: 2.6rem;
    width: 4.7rem;
    border-radius: 10rem;
    display: flex;
    align-items: center;
    margin-right: 3.5rem;
    cursor: pointer;
    margin-top: 1rem;

    div {
      background: #fff;
      height: 2rem;
      width: 2rem;
      border-radius: 50%;
      transition: all 0.2s;
    }
  }
`;

const ForwardingToggle = styled.div`
  background: ${(props) => (props.exportForwarding ? '#0746a7' : '#e0e0e0')};

  div {
    margin-left: ${(props) => (props.exportForwarding ? '2.4rem' : '.3rem')};
  }
`;

const ClearanceToggle = styled.div`
  background: ${(props) => (props.customsClearance ? '#0746a7' : '#e0e0e0')};

  div {
    margin-left: ${(props) => (props.customsClearance ? '2.4rem' : '.3rem')};
  }
`;

const InsuranceToggle = styled.div`
  background: ${(props) => (props.cargoInsurance ? '#0746a7' : '#e0e0e0')};

  div {
    margin-left: ${(props) => (props.cargoInsurance ? '2.4rem' : '.3rem')};
  }
`;

const DeliveryToggle = styled.div`
  background: ${(props) => (props.delivery ? '#0746a7' : '#e0e0e0')};

  div {
    margin-left: ${(props) => (props.delivery ? '2.4rem' : '.3rem')};
  }
`;

const Texts = styled.div`
  line-height: 2.2;
  div {
    font-weight: 500;
    font-size: 1.7rem;
  }

  p {
    color: #464545;
  }
`;

const AdditionalServices = () => {
  const [togglebarData, setTogglebarData] = useState({
    exportForwarding: false,
    customsClearance: false,
    cargoInsurance: false,
    delivery: false,
  });

  const { exportForwarding, customsClearance, cargoInsurance, delivery } =
    togglebarData;

  const onToggleServices = (service) => {
    if (service === 'exportForwarding') {
      setTogglebarData({
        ...togglebarData,
        exportForwarding: !exportForwarding,
      });
    } else if (service === 'customsClearance') {
      setTogglebarData({
        ...togglebarData,
        customsClearance: !customsClearance,
      });
    } else if (service === 'cargoInsurance') {
      setTogglebarData({
        ...togglebarData,
        cargoInsurance: !cargoInsurance,
      });
    } else if (service === 'delivery') {
      setTogglebarData({
        ...togglebarData,
        delivery: !delivery,
      });
    }
  };

  return (
    <Wrapper>
      <Heading>Additional Services</Heading>
      <Services>
        <Item>
          <ForwardingToggle
            exportForwarding={exportForwarding}
            onClick={() => {
              onToggleServices('exportForwarding');
            }}
          >
            <div></div>
          </ForwardingToggle>
          <Texts>
            <div>Export Forwarding</div>
            <p>We handle customs clearance and documentation.</p>
          </Texts>
        </Item>

        <Item>
          <ClearanceToggle
            customsClearance={customsClearance}
            onClick={() => {
              onToggleServices('customsClearance');
            }}
          >
            <div></div>
          </ClearanceToggle>
          <Texts>
            <div>Import Customs Clearance</div>
            <p>We handle import customs and regulatory requirements.</p>
          </Texts>
        </Item>

        <Item>
          <InsuranceToggle
            cargoInsurance={cargoInsurance}
            onClick={() => {
              onToggleServices('cargoInsurance');
            }}
          >
            <div></div>
          </InsuranceToggle>
          <Texts>
            <div>Cargo Insurance</div>
            <p>Protect your cargo from logistics risks up to its full value.</p>
          </Texts>
        </Item>

        <Item>
          <DeliveryToggle
            delivery={delivery}
            onClick={() => {
              onToggleServices('delivery');
            }}
          >
            <div></div>
          </DeliveryToggle>
          <Texts>
            <div>Transport / Delivery</div>
            <p>We deliver the cargo to your doorstep from the port.</p>
          </Texts>
        </Item>
      </Services>
    </Wrapper>
  );
};

export default AdditionalServices;
