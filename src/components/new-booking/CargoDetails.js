import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #fff;
  border-radius: 2px;
  padding: 4rem 4rem;
  margin-bottom: 2rem;
  display: grid;
  grid-template-columns: 0.6fr 0.4fr;
  grid-gap: 7rem;
`;

const Heading = styled.div`
  font-weight: 500;
  font-size: 1.7rem;
`;

const ItemLeft = styled.div``;

const TotalPackage = styled.div`
  background: #f3f3f3;
  height: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #aaaaaa;
  font-weight: 500;
  width: 40rem;
  margin-top: 3rem;
  border-radius: 2px;
  transition: all 0.3s;

  div {
    height: 3.4rem;
    display: flex;
    align-items: center;
    width: 19.4rem;
    justify-content: center;
    cursor: pointer;
    margin: 0 0.3rem;
    border-radius: 2px;
  }
`;

const TotalDimension = styled.div`
  background: ${(props) => (props.totalDimension ? '#fff' : '#f3f3f3')};

  color: ${(props) => (props.totalDimension ? '#0746a7' : '#aaaaaa')};
`;

const PackageDetails = styled.div`
  background: ${(props) => (props.packageDetails ? '#fff' : '#f3f3f3')};

  color: ${(props) => (props.packageDetails ? '#0746a7' : '#aaaaaa')}; ;
`;

const Inputs = styled.div`
  display: flex;
  margin-top: 5rem;
`;

const InputField = styled.div`
  width: 20rem;
  height: 5rem;
  border: 1.5px solid #aaaaaa;
  margin-right: 3rem;
  position: relative;

  :hover {
    border: 1.5px solid #0746a7;
  }

  > div:first-child {
    height: 100%;
    display: flex;
    align-items: center;
    border-radius: 3px;
  }

  input {
    position: relative;
    width: 16rem;
    height: 100%;
    margin-right: 1rem;
    border: none;
    outline: none;
    padding: 1rem 1.5rem;

    :focus {
      color: #000;
    }
  }

  label {
    position: absolute;
    padding: 0.8rem .5rem;
    top: -2.37rem;
    left: 0.8rem;
    color: #000;
    background: #fff;
  }
`;

const Kilogram = styled.div`
  color: #aaaaaa;
`;

const ItemRight = styled.div``;

const CargoDetails = () => {
  const [totalPack, setTotalPack] = useState({
    totalDimension: true,
    packageDetails: false,
  });

  const { totalDimension, packageDetails } = totalPack;

  const onChangeTotalPackage = (data) => {
    if (data === 'totalDimension') {
      setTotalPack({
        totalDimension: true,
        packageDetails: false,
      });
    } else if (data === 'packageDetails') {
      setTotalPack({
        totalDimension: false,
        packageDetails: true,
      });
    }
  };

  return (
    <Wrapper>
      <ItemLeft>
        <Heading>Cargo Details</Heading>
        <TotalPackage>
          <TotalDimension
            totalDimension={totalDimension}
            onClick={() => {
              onChangeTotalPackage('totalDimension');
            }}
          >
            Total Dimensions
          </TotalDimension>
          <PackageDetails
            packageDetails={packageDetails}
            onClick={() => {
              onChangeTotalPackage('packageDetails');
            }}
          >
            Package Details
          </PackageDetails>
        </TotalPackage>

        <Inputs>
          <InputField>
            <div>
              <input type='text' placeholder='Total Volume' className='input' />
              <Kilogram>Kg</Kilogram>
            </div>
            <label className='label'>Total Volume</label>
          </InputField>
          <InputField>
            <div>
              <input type='text' placeholder='Total Weight' className='input' />
              <Kilogram>Kg</Kilogram>
            </div>
            <label className='label'>Total Weight</label>
          </InputField>
        </Inputs>
      </ItemLeft>
      <ItemRight></ItemRight>
    </Wrapper>
  );
};

export default CargoDetails;
