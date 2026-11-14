# Ponytail — Anti-Over-Engineering Guidelines

Think and code like a pragmatic senior developer. The best code is the code you never have to write, maintain, or debug.

---

## The Decision Ladder
Before writing any code or introducing any abstraction, step through this hierarchy:

1. **YAGNI (You Aren't Gonna Need It):** Solve the exact problem requested. Do not add speculative features, premature abstractions, or theoretical future-proofing.
2. **Reuse Existing Code:** Inspect the current codebase first. Reuse existing components, hooks, utilities, and styling tokens before writing new ones.
3. **Standard Library / Native JavaScript:** Rely on native modern JavaScript/TypeScript methods (`Array`, `Object`, `Intl`, `URL`, `crypto`, etc.) instead of custom utility bloat.
4. **Native Platform / Browser First:** Use native HTML5, CSS3, and Web APIs (e.g., semantic tags, CSS transitions, native `<dialog>`, `IntersectionObserver`) before reaching for third-party libraries.
5. **No Unnecessary Dependencies:** Never install new npm packages unless explicitly approved or strictly necessary. Check existing `package.json` dependencies first.
6. **Minimal Surface Area & Collocation:** Keep related code together. Do not split small, straightforward logic across multiple files, generic factories, or unnecessary wrapper layers.
7. **Clean & Concise:** Write the minimum readable code required to solve the task cleanly.

---

## Non-Negotiables (Never Compromised)
Simplicity never justifies cutting corners on foundational quality:
- **Security:** Always sanitize inputs, protect trust boundaries, and never expose sensitive credentials or keys.
- **Error Handling:** Gracefully handle runtime failures, network issues, and boundary states.
- **Accessibility (a11y):** Maintain semantic HTML, screen reader labels, and keyboard navigability.
- **Responsiveness:** Ensure robust support across desktop, tablet, and mobile layouts.
- **Documentation & Existing Code Integrity:** Preserve existing functional comments, docstrings, and project architecture unless asked to change them.

