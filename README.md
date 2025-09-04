# X-Frequency

Turn your browser into a lightweight frequency lab. **X-Frequency** lets you record short audio samples, play them back instantly, and explore frequency ranges – including quick checks for the typical human speech band (≈80–300 Hz).

> ⚠️ **Note**: This is a work-in-progress single-page app. No cloud backend, no tracking; everything runs locally in the browser.

---

## Features

- **Record & Playback**: One-tap 5-second capture; play and stop instantly.
- **Smart Button UX**: Recording auto-stops playback; button states are always clear.
- **Diagnostics Panel**: Live helpers for testing & troubleshooting.
- **Speech-Band Check (Test)**: Quick gauge for activity in ~80–300 Hz (diagnostic only).
- **Zero-install**: Works as a single HTML file.

---

## Quick Start

1. Download the latest `index-Release-*.htm` from the releases.
2. Open it in a modern browser (Chrome/Edge/Firefox).
3. Allow **microphone** access when prompted.
4. Hit **“5 Sek. Ton aufzeichnen”**, then **“File abspielen”**.

> The “About” section auto-detects the **Release** version from the file name.

---

## Packaging (optional)

- **Android**: Wrap with Capacitor → build APK/AAB in Android Studio.
- **macOS**: Wrap with Electron → DMG/ZIP via `electron-builder`.

See `/packaging` for starter scaffolds.

---

## Privacy

- Audio stays in your browser memory; no uploads.
- Microphone permission is requested by the browser and can be revoked anytime.

---

## Contributing

Issues and PRs are welcome. For bug reports, include:
- Browser + OS version
- The file name of your build (e.g. `index-Release-1.34.58-20250904.htm`)
- Steps to reproduce + console output if available

---

## License

[MIT](./LICENSE)
