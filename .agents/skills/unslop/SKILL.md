---
name: unslop
description: Audits and eliminates generic "AI slop" across UI design, copywriting, and code. Enforces human-crafted design standards, clear plain-English copy, and clean idiomatic code while preserving brand identity and safety.
---

# Unslop: Human-Crafted Quality Standards & Precautions

This skill audits and cleans up generic "AI-generated tells" (slop) across UI design, copywriting, and code. It ensures everything looks, sounds, and functions as if built by an experienced human designer and senior software engineer.

---

## 0. Strict Safety Precautions (Mandatory)

Before applying any changes under this skill, adhere to these safety boundaries:

1. **Non-Destructive Guarantee**: Never break existing functional logic, route handlers, state management, or API calls. Unslop is purely subtractive and refinement-focused.
2. **Brand Preservation**: Always preserve Nisschay's core brand identity:
   - Primary Accent: Electric Blue (`#075BFA`)
   - Text & Headings: Deep Navy (`#07142F`)
   - Surface: Warm White / Subtle Cream (`#FAF8F4`, `#FCFAF6`, `#FAF7F2`)
   - Subtle Accents: Pale Blue (`#EBF2FE`, `rgba(7, 91, 250, 0.08)`)
3. **Zero Untrusted Dependencies**: Never install third-party packages, automated shell scripts, or binary utilities to perform "unslop". All refinements are applied directly and transparently through source edits.
4. **Git Safety Check**: Every edit must produce clean, inspectable diffs that can be individually reviewed or reverted via `git checkout`.
5. **Compilation Verification**: Always verify changes by running `npm run build` or checking for zero TypeScript/lint errors before concluding.

---

## 1. UI & Visual Design Unslop

AI models frequently default to exaggerated, repetitive visual tropes ("vibecoding"). Audit and eliminate the following:

### Telltale AI Visual Tells to Remove:
- ❌ **Rainbow & Neon Glows**: Random purple, neon pink, cyan gradients on card borders or text.
- ❌ **Excessive Glassmorphism**: Overuse of `backdrop-blur-xl` and translucent white backgrounds on everything, which degrades readability and GPU performance.
- ❌ **Unanchored Floating Elements**: Random floating circles, abstract blur shapes, and particle fields that have no connection to the content.
- ❌ **Random Emoji Icons**: Using emojis (🚀, 💡, 🔥, ✨) in place of professional, consistent SVG or Lucide icons.
- ❌ **Excessive Animation Chaos**: Elements that flip, wobble, continuous rainbow-shimmer, or require artificial scroll deceleration.

### Human-Crafted Design Standards:
- ✅ **Tactile Depth**: Use warm-white backgrounds (`#FAF8F4`), subtle borders (`border-[#EAE4D8]`), and soft, multi-layered elevation shadows (`shadow-[0_4px_20px_rgba(7,20,47,0.06)]`).
- ✅ **Consistent Spacing Rhythm**: Enforce a strict 4px/8px scale (`gap-4`, `gap-6`, `py-16`, `py-24`).
- ✅ **Purposeful Micro-interactions**: Smooth, subtle state changes on hover/focus (`transition-transform duration-200 hover:-translate-y-1 hover:border-[#075BFA]/40`).
- ✅ **Accessibility & Contrast**: Ensure text contrast meets WCAG AA standards (minimum 4.5:1 ratio for body text).

---

## 2. Copywriting & Content Unslop

AI-generated text is notoriously recognizable by cliché phrasing, passive voice, and exaggerated corporate filler.

### Banned AI Vocabulary & Clichés:
Do **not** use the following words or phrases in website copy:
- ❌ *"Delve"* / *"Delving"*
- ❌ *"Pivotal"* / *"Testament to"*
- ❌ *"In today's fast-paced digital world / landscape"*
- ❌ *"Unleash the power of"* / *"Harness the potential"*
- ❌ *"Elevate your business / digital presence"*
- ❌ *"Cutting-edge"* / *"State-of-the-art"* / *"Game-changing"*
- ❌ *"Seamlessly integrate"* / *"Bespoke tapestry"*
- ❌ *"Beacon of innovation"* / *"Revolutionize"*

### Human Copywriting Rules:
- ✅ **Concrete & Direct**: Say exactly what is built and what outcome the client gets.
  - *Bad:* "We elevate your digital presence through synergistic cutting-edge web architecture."
  - *Good:* "We build fast, secure websites and custom software that help your business get more clients and operate efficiently."
- ✅ **Active Voice**: Keep sentences punchy, conversational, and natural to read aloud.
- ✅ **Real Business Value**: Focus on speed, reliability, customer bookings, revenue, and daily workflow time saved.

---

## 3. Code Architecture & Cleanliness Unslop

AI code often includes redundant scaffolding, placeholder comments, and unnecessary wrappers.

### Code Slop to Eliminate:
- ❌ **Obvious "Narrative" Comments**:
  ```tsx
  // Bad:
  // Render the button component
  <button onClick={handleClick}>Click me</button>
  ```
  Keep comments reserved only for non-obvious business logic or timing calculations.
- ❌ **Wrapper Hell**: Deeply nested `<div>` wrappers that have no styling or semantic purpose.
- ❌ **Unused Imports & Dead Variables**: Leftover icons, helper hooks, or unused props.
- ❌ **Generic Variable Names**: `tempData`, `obj`, `item1`, `doStuff`. Use descriptive domain names (`timelineNodes`, `activeSlideIndex`, `handleServiceSelect`).

---

## 4. Unslop Audit Checklist

When auditing a component or page:
1. [ ] **Scan visual hierarchy**: Does anything look like a generic AI template?
2. [ ] **Read copy aloud**: Does it sound like a real business owner talking to a client?
3. [ ] **Check performance**: Are blur filters, shadows, and animations hardware-accelerated and smooth?
4. [ ] **Verify accessibility**: Does it respect `prefers-reduced-motion`? Is keyboard navigation supported?
5. [ ] **Run type check**: `npm run build` succeeds with zero errors.
