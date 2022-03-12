import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { selectPatch } from '../../../../services/omniSynth';

const PatchList = ({ patchList }) => {
  const [selectedPatch, setSelectedPatch] = useState(patchList[0]);

  const onPatchClick = async (e) => {
    const patchName = e.target.innerText;
    await selectPatch(patchName);
    setSelectedPatch(patchName);
  }

  return (
    <StyledPatchList>
      <h3>Patch List</h3>
      <div className="patchNames">
        {patchList.map((patchName, index) => {
          return <p key={index} onClick={onPatchClick} className={`${selectedPatch === patchName ? 'selected' : ''}`}>
            {patchName}
          </p>
        })}
      </div>
    </StyledPatchList>
  );
}

const StyledPatchList = styled.div`
  .patchNames {
    overflow-y: scroll;
    height: 200px;

    p {
      cursor: pointer;
      color: grey;

      &.selected {
        color: white;
      }
    }
  }
`

export default PatchList;