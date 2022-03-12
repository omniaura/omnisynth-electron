export const getAllPatches = async () => {
  const resp = await fetch('http://localhost:42042/patches', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });

  const result = await resp.json();

  if (!result.ok) {
    console.log(`Failed to send request to OmniSynth server`);
    return {};
  }
  return result;
}

export const selectPatch = async (patchName) => {
  console.log(patchName)
  const data = { patchName };
  await fetch(`http://localhost:42042/patches?patchName=${patchName}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    // body: JSON.stringify(data)
  });

  // const result = await resp.json();

  // if (!result.ok) {
  //   console.log(`Failed to send request to OmniSynth server`);
  //   return {};
  // }
  // return result;
}
