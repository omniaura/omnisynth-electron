import React, { useEffect, useState } from 'react';
import { sendOmnisynthMessage } from '../../services/oscInterface';

const Loading = () => {
  const [serverInitialized, setServerInitialized] = useState(false);
  const [patchesCompiled, setPatchesCompiled] = useState(false);
  const [patternsCompiled, setPattternsCompiled] = useState(false);

  useEffect(() => {
    const initializeServer = async () => {
      await sendOmnisynthMessage('/omni');
      setServerInitialized(true);
    }

    initializeServer();
  }, []);

  useEffect(() => {
    const compilePatches = async () => {
      await sendOmnisynthMessage('/patches/compileAll')
      setPatchesCompiled(true);
    }

    const compilePatterns = async () => {
      await sendOmnisynthMessage('/patterns/compile')
      setPattternsCompiled(true);
    }

    if (serverInitialized) {
      compilePatches();
      compilePatterns();
    }

    // direct to main screen
  }, [serverInitialized]);

  return (
    <div>
      <h2>Loading OmniSynth...</h2>
      <ul>
        <li>{!serverInitialized ? 'Initializing OmniSynth Server...' : 'OmniSynth Server initialized!'}</li>
        <li>{!patchesCompiled ? 'Compiling patches...' : 'Patches compiled!'}</li>
        <li>{!patternsCompiled ? 'Compiling patterns...' : 'Patterns compiled!'}</li>
      </ul>
    </div>
  );
}

export default Loading;