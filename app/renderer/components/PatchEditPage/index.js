import { push } from 'connected-react-router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';

const PatchEditPage = () => {
  const [patchList, setPatchList] = useState(['tone1', 'tone2', 'tone3', 'tone4', 'tone5', 'tone6']);
  const history = useHistory()

  // useEffect(() => {
  //   const getPatches = async () => {
  //     const allPatches = await getAllPatches();
  //     setPatchList(allPatches.patches);
  //   }

  //   getPatches();
  // }, [])

  const handleHomeBtnClick = () => {
    history.push('/')
  }

  return (
    <StyledContainer>
      <h1>Edit Patches</h1>
      <div className="subheader">
        <div className="button homeButton" onClick={handleHomeBtnClick}>Home</div>
      </div>
      <div className='patchGrid'>
        {patchList.map((patchName) => {
          return <div className='button patchButton' key={patchName}>
            {patchName}
          </div>
        })}
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  text-align: center;
  font-family: sans-serif;
  width: 70%;
  margin: auto;

  .button {
    cursor: pointer;
    color: white;
    padding: 6px 12px;
    margin: 4px;
    font-size: 24px;
    background-color: grey;
    border: 1px solid transparent;
    border-radius: 4px;
  }

  .homeButton {
    width: 10%;
  }

  h1 {
    color: white;
  }

  .patchGrid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    .patchButton {
      flex-grow: 1;
    }
  }
`

export default PatchEditPage;