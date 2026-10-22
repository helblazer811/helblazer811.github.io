Tempus core, vendored unchanged from https://github.com/helblazer811/tempus
Commit: 319780b4f5f1cf7f517bcf94bce5a6b1f92e04c8

Only timeline.ts, player.ts and overlay.ts are needed by the SVG figure.
These local imports avoid requiring private GitHub package access for readers or builds.
