# Readable App Sources

These files are manually named versions of the app-owned parts extracted from
`../bundle.js` with `webcrack`.

The original browser page still loads `../bundle.js`. Treat these files as the
human-readable source reference for future edits, then port changes back into
the bundle or rebuild from real source if it becomes available.

## Module Map

- `PlaybackController.js` mirrors Webpack module `68.js`.
- `Mp3AudioSystem.js` mirrors Webpack module `159.js`.
- `YoutubeAudioSystem.js` mirrors Webpack module `126.js`.
- `actions.js` consolidates the action creator modules `116.js`, `117.js`,
  `118.js`, and `119.js`.

The `bundle-readable` folder also contains the automatically split Webpack
modules and `deobfuscated.js`, which are useful for cross-reference.
