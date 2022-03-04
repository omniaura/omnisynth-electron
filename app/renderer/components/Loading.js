import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { compileAllPatches, sendOmnisynthMessage } from '../../services/omniSynth';

const Loading = () => {
  const [patchesCompiled, setPatchesCompiled] = useState(false);
  const [patternsCompiled, setPattternsCompiled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const compilePatches = async () => {
      await compileAllPatches();
      setPatchesCompiled(true);
    }

    // const compilePatterns = async () => {
    //   await sendOmnisynthMessage('/patterns/compile')
    //   setPattternsCompiled(true);
    // }

    compilePatches();
    // compilePatterns();

    // direct to main screen
  }, []);

  // useEffect(() => {
  //   // if (patchesCompiled && patternsCompiled) {
  //   //   location = './home';
  //   // }
  // })

  return (
    <div>
      <h1>Loading OmniSynth...</h1>
      <p>{!patchesCompiled ? 'Compiling patches...' : 'Patches compiled!'}</p>
      <p>{!patternsCompiled ? 'Compiling patterns...' : 'Patterns compiled!'}</p>
    </div>
  );
}

export default Loading;