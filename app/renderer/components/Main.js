import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { sendOmnisynthMessage } from '../../services/omniSynth';
import styled from 'styled-components';

const Main = () => {
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

        <div className='grid-item patchesList'>
          <div>
            Patches List Placeholder
          </div>
        </div>

        <div className='grid-item patchesControls'>
          <div>
            Patches Controls Placeholder
          </div>
        </div>
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

  div.interactionPane {
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 5px;
  
    div.actionButtons {
      display: flex;
      flex-direction: column;
  
      button {
        cursor: pointer;
        background: transparent;
        color: white;
        border-radius: 3px;
        margin: 5px;
        padding: 5px;
    
        &.editPatchesBtn {
          border: 2px solid cornflowerblue;
        }
        &.editPatternsBtn {
          border: 2px solid palevioletred;
        }
        &.exitBtn {
          border: 2px solid white;
        }
      }
    }
  }
`

export default Main;