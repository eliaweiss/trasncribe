# Source

This folder is the editable source for `../Transcribe Music Online_files/bundle.js`.

Use the named files in `app/` for normal application work:

- `app/App.js` is the main React app.
- `app/PlaybackController.js` owns play, pause, seek, loops, speed, pitch, and volume.
- `app/audio/` contains the MP3 and YouTube playback backends.
- `app/components/` contains the visible UI pieces.
- `app/actions/` and `app/state/` contain Redux actions and reducers.

The files in `generated/` are recovered Webpack/vendor internals. They are still
numbered because the original source names were not present in the saved bundle.
They are intentionally isolated so day-to-day edits do not happen there.

Rebuild the browser bundle with:

```sh
npm run build
```

The HTML page still loads `Transcribe Music Online_files/bundle.js`; do not edit
that generated file directly unless you intentionally want a one-off patch.
