export const sendOmnisynthMessage = async (message, ...args) => {
  console.log(`Sending message ${message}`)
  // const resp = await fetch(process.env.OMNISYNTH_PATH, { body: { message, params: args }});
  // if (!resp.ok) {
  //   console.log(`Failed to send ${message} to OmniSynth server`)
  // } else {
  //   console.log(`Message sent: ${message}`)
  // }
  // sleep for 0.5 seconds to simulate response
  await new Promise(r => setTimeout(r, 500));
  return true;
}
