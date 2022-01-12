# OmniSynth - Electron JS 

Documentation for Electron and the development of the OmniSynth framework. 

* Electron getting started docs: https://www.electronjs.org/docs/latest/tutorial/quick-start

* 'npm start' to run application.

## OSC Communication 
OmniSynth DSP (omnisynth-dsp) and OSC communication with Electron JS.

* OSC JS package: https://www.npmjs.com/package/osc-js

* Needs to receive the following:
	1. /control
	2. /params
	3. /outDev
	4. /noteOn
	5. /noteOff

* Needs to transmit various commands for changing parameters (see omnisynth-dev).