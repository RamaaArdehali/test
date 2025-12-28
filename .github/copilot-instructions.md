## Project snapshot

- Entry file: `idex.html` (note: filename is "idex.html", not "index.html"). This is the single-page HTML used to run the app.
- Styles: `css.css`
- Scripts: `js.js`

## Big-picture architecture (what an agent must know)

- This repository is a minimal static site: a single HTML file references a stylesheet and one script file. There is no build tool, bundler, or test harness.
- Primary data flow: DOM (HTML) -> behaviour (JavaScript). The HTML exposes elements with ids `header`, `content`, and `footer` which are the main touch points for visual content and scripting.

## Developer workflows (how to run, test, debug)

- Run locally: open `idex.html` in a browser or use a simple static-server / editor Live Server. There is no `npm`/`python` build step.
- Debugging: use browser DevTools (Console, Elements). The app includes an inline button that calls `console.log` — check `js.js` for script-driven behaviors.

## Project-specific conventions and patterns

- File names are literal and important: `idex.html`, `css.css`, `js.js`. Don't assume `index.html` exists — edits and CI (if added later) must reference the exact filenames.
- Minimal separation of concerns: markup in `idex.html`, presentation in `css.css`, behavior in `js.js`. Prefer making DOM-focused changes in `idex.html` and behavior changes in `js.js`.

## Examples (real snippets to use as anchors)

- Change the page title: update the `<title>` tag in `idex.html`.
- Update header text: edit the element with id `header` in `idex.html`, or set its text in `js.js` via
  - `document.getElementById('header').textContent = 'New header';`
- Add interactive behavior: place event listeners or DOM-manipulation logic inside `js.js`; avoid adding many inline `onclick` attributes — prefer centralized handlers.

## Integration points and external dependencies

- None are present in the current codebase. If external packages or CDNs are added, list them in this file and update run/debug steps accordingly.

## Merge notes (if you're an automated agent)

- No existing `.github/copilot-instructions.md` or README was found in this repository. Create or update this file only after verifying filenames (e.g., if the repo owner renames `idex.html` to `index.html`, update references).
- Keep suggestions and edits constrained to the three root files unless the owner requests adding a build/test system.

## When to ask the maintainer

- Confirm whether `idex.html` is intentionally named (typo vs. deliberate). If you plan to rename it to `index.html`, ask before changing file names.
- Ask before adding a build system (npm, bundler) — current project is intentionally simple.

If anything here is unclear or you'd like more examples (e.g., a small Live Server workflow snippet or recommended Git commit message style), tell me what to include and I will update this file.
