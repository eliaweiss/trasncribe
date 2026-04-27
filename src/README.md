# Source

This is now a normal React source tree. The app is written with named components, hooks, and utility modules instead of recovered numeric bundle modules.

- `main.jsx` mounts the React app.
- `App.jsx` owns top-level playback state, file loading, marks, and selection.
- `hooks/useAudioPlayer.js` wraps the browser audio element and hotkeys.
- `components/` contains the visible UI: landing page, player, toolbar, waveform timeline, markers, and control panel.
- `utils/audioBuffer.js` contains audio decoding and time formatting helpers.

`Transcribe Music Online_files/bundle.js` is generated from this source by `npm run build`; edit the files in `src/`, not the bundle.
