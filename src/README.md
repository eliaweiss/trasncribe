# Source

This is now a normal React source tree. The app is written with named components, hooks, and utility modules instead of recovered numeric bundle modules.

- `main.jsx` mounts the React app.
- `App.jsx` owns top-level playback state, file loading, marks, and selection.
- `hooks/useAudioPlayer.js` wraps the browser audio element and hotkeys.
- `components/` contains the visible UI: landing page, player, toolbar, waveform timeline, markers, and control panel.
- `utils/audioBuffer.js` contains audio decoding and time formatting helpers.

Development is served by Vite from `src/main.jsx`; there is no checked-in app bundle.
Use `npm run dev` for local development and `npm run build` for a normal Vite
production build in `dist/`.


http://muse-transcribe.com/