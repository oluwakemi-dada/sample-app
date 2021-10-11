import React, { useState } from 'react';
import styled from 'styled-components';
import { GoInfo } from 'react-icons/go';
import { MdLocationOn } from 'react-icons/md';
import { AiFillCalendar } from 'react-icons/ai';

const Wrapper = styled.div`
  background: #fff;
  border-radius: 2px;
  padding: 4rem 4rem;
  margin-bottom: 2rem;
`;

const ImpExpFromTo = styled.div`
  display: grid;
  grid-template-columns: 0.16fr 0.42fr 0.42fr;
  grid-gap: 4rem;
`;

const InfoIcon = styled.div`
  font-size: 1.7rem;
`;

const ImportExport = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  border-radius: 2px;

  > * {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;

    :hover {
      background: #0746a7;
      color: #fff;
    }
  }
`;

const ImportDiv = styled.div`
  border: ${(props) =>
    props.importt ? ' 1px solid #0746a7' : ' 1px solid #bbb6b6'};
  background: ${(props) => (props.importt ? '#0746a7' : '#fff')};
  color: ${(props) => (props.importt ? '#fff' : '#000')};

  :hover {
    border: 1px solid #0746a7;
  }
`;

const ExportDiv = styled.div`
  border-top: ${(props) =>
    props.exportt ? ' 1px solid #0746a7' : ' 1px solid #bbb6b6'};
  border-bottom: ${(props) =>
    props.exportt ? ' 1px solid #0746a7' : ' 1px solid #bbb6b6'};
  border-right: ${(props) =>
    props.exportt ? ' 1px solid #0746a7' : ' 1px solid #bbb6b6'};
  background: ${(props) => (props.exportt ? '#0746a7' : '#fff')};
  color: ${(props) => (props.exportt ? '#fff' : '#000')};

  :hover {
    border: 1px solid #0746a7;
  }
`;

const Direction = styled.div`
  background: #f3f3f3;
  height: 4rem;
  display: flex;
  align-items: center;
  border-radius: 2px;
  padding-left: 1rem;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      font-weight: 500;
    }
  }

  input {
    background: #f3f3f3;
    height: 4rem;
    padding: 1rem;
    width: 100%;
    border: none;
    outline: none;
  }
`;

const LocationIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  margin-right: 0.5rem;
`;

const DateTermsValue = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 3rem;
  grid-gap: 4rem;

  > * {
    height: 4rem;
    background: #f3f3f3;
    padding: 0 1rem;
    border: none;
    outline: none;
  }
`;

const Date = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.8rem;

  input {
    width: 100%;
    background: #f3f3f3;
    height: 100%;
    padding: 0 1rem;
    border: none;
    outline: none;
  }
`;

const CalendarIcon = styled.div`
  margin-right: 1rem;
  display: flex;
  align-items: center;
  > * {
    font-size: 1.7rem;
  }
`;

const Location = () => {
  const [transportType, setTransportType] = useState({
    importt: false,
    exportt: false,
  });

  const { importt, exportt } = transportType;

  const selectTransportType = (type) => {
    if (type === 'import') {
      setTransportType({
        importt: !importt,
        exportt: false,
      });
    } else if (type === 'export') {
      setTransportType({
        importt: false,
        exportt: !exportt,
      });
    }
  };

  return (
    <Wrapper>
      <InfoIcon>
        <GoInfo />
      </InfoIcon>
      <ImpExpFromTo>
        <ImportExport>
          <ImportDiv
            onClick={() => {
              selectTransportType('import');
            }}
            importt={importt}
          >
            Import
          </ImportDiv>
          <ExportDiv
            onClick={() => {
              selectTransportType('export');
            }}
            exportt={exportt}
          >
            Export
          </ExportDiv>
        </ImportExport>
        <Direction>
          <div>
            <LocationIcon>
              <MdLocationOn />
            </LocationIcon>
            <span>From</span>
          </div>
          <input type='text' placeholder='City or port' />
        </Direction>
        <Direction>
          <div>
            <LocationIcon>
              <MdLocationOn />
            </LocationIcon>
            <span>To</span>
          </div>
          <input type='text' placeholder='City or port' />
        </Direction>
      </ImpExpFromTo>

      <DateTermsValue>
        <Date>
          <CalendarIcon>
            <AiFillCalendar />
          </CalendarIcon>
          <input type='text' placeholder='Ready Date' />
        </Date>
        <select name='incoterms'>
          <option value='incoterms'>Incoterms</option>
          <option value='value2'>Value2</option>
          <option value='value3'>Value3</option>
          <option value='value4'>Value4</option>
        </select>
        <input type='text' placeholder='Total Cargo Value' />
      </DateTermsValue>
    </Wrapper>
  );
};

export default Location;
