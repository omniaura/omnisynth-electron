import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PatchList from './components/PatchList';

const HomePage = () => {
  const [patchList, setPatchList] = useState(['tone1', 'tone2', 'tone3', 'tone4', 'tone5', 'tone6']);

  // useEffect(() => {
  //   const getPatches = async () => {
  //     const allPatches = await getAllPatches();
  //     setPatchList(allPatches.patches);
  //   }

  //   getPatches();
  // }, [])

  return (
    <StyledContainer>
      <h1>Welcome to OmniSynth!</h1>
      <div className='interactionPane'>
        <div className='grid-item actionButtons'>
          <button className='editPatchesBtn'>
            Edit Patches
          </button>
          <button className='editPatternsBtn'>
            Edit Patterns
          </button>
          <button className='exitBtn'>
            Exit OmniSynth
          </button>
        </div>
        <PatchList className='grid-item' patchList={patchList} />
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  text-align: center;
  font-family: sans-serif;
  width: 70%;
  margin: auto;

  h1 {
    color: white;
  }

  button {
    cursor: pointer;
    background: transparent;
    color: white;
    border-radius: 3px;
    margin: 5px;
    padding: 5px;
  }

  div.interactionPane {
    display: grid;
    grid-template-columns: auto auto;
    padding: 5px;
  
    div.actionButtons {
      display: flex;
      flex-direction: column;
      justify-content: center;
  
      .editPatchesBtn {
        border: 2px solid cornflowerblue;
      }
      .editPatternsBtn {
        border: 2px solid palevioletred;
      }
      .exitBtn {
        border: 2px solid white;
      }
    }

    div.patchesControls {
      display: flex;
      flex-direction: column;
    }
  }
`

export default HomePage;