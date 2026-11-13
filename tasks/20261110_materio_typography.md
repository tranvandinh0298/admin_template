# Task: Replicate Materio Typography showcase
**Task ID:** 20261110_materio_typography

## Context
The user requests Typography based on https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/vertical-menu-template/ui-typography.html.
The repository contains standalone static component pages, shared layout styles and browser tests. Preserve unrelated shared-layout edits and earlier component artifacts.
Direct HTTP retrieval identifies seven cards: Headings, Customizing Headings (Default), Display headings, Paragraph, Inline Text Elements, Blockquote and Lists. Observed examples include heading levels1–6, display levels1–6, paragraph/lead/muted text, semantic inline text, four quote treatments, unstyled and inline lists, and aligned/nested description lists with a truncated term. This is a markup inventory; exact customized-heading content, typography metrics, font availability and responsive behavior require rendered verification. The web reader could not access the URL; direct HTTP retrieval succeeded.

## Objective
Provide a directly viewable Typography showcase matching the reference text hierarchy, styles, semantic examples and grouped responsive layout within the existing static admin template.

## Scope
### In scope
- All seven verified typography cards and their complete example inventory.
- Standard/customized/display headings; paragraph, lead and muted text.
- Highlight, deletion, inaccurate text, insertion, underline, fine print, bold, emphasis and abbreviations.
- Blockquotes with attribution/alignment, unstyled/nested and inline lists, and aligned/nested description lists including truncation.
- Semantic markup, readable responsive presentation, text enlargement and shared-shell coexistence.
### Out of scope / Non-goals
- Global typography/theme migration, changing every component page or redesigning the shell.
- Rich-text editor, font picker, content editing, persistence, API or backend integration.
- Adding unrelated typography variants not established by the reference.
- BA, technical design, source code or tests during task-create.

## Requirements
1. Deliver a standalone page following repository conventions, preserving the seven observed reference cards and their subgroups rather than reducing the page to a few generic text samples.
2. Verify and reproduce heading levels1–6 and customized-heading examples, including reference labels, secondary text and relative hierarchy. Verify exact customized content before finalizing it.
3. Provide Display1–6 examples with their verified size, weight, line-height, spacing and responsive treatment; distinguish display styling from ordinary headings and document any font substitution.
4. Paragraph examples must cover ordinary, lead and muted text with the reference wording/length and visible differences in weight, size, color and line-height.
5. Inline Text Elements must demonstrate mark, del, s, ins, u, small, strong, em and abbreviations with their intended semantics, labels and visual treatment. Retrieved abbreviation examples are attr (attribute) and HTML (HyperText Markup Language), the latter with initialism styling. Preserve expansions in accessible text/markup and do not depend solely on pointer hover to understand essential content.
6. Blockquote examples must include basic quote, named source, centered attribution and right-aligned attribution as verified. Use appropriate quotation, citation and attribution semantics; reproduce reference spacing, alignment and text without implying a real endorsement or source beyond the sample.
7. Lists must reproduce unstyled lists with nested list behavior, inline list items, and aligned description lists with term/description pairs, a truncated term and a nested description list. Preserve hierarchy and reading order. Verify exact item counts and content from the rendered reference.
8. Match the typography's font family, weights, sizes, line-heights, colors, margins and card/table layout after inspecting computed reference styles. Reuse existing authorized local fonts where appropriate. Do not silently introduce an external font dependency or claim exact fidelity when a fallback font is used.
9. Keep typography styles scoped so showcase h1–h6, display classes, tables, lists and blockquotes do not unintentionally restyle the shell or earlier pages. The user has not requested a global design-token/font overhaul.
10. Preserve meaningful page/card headings and accessible example labels. Demonstration heading levels must remain distinguishable from page-navigation hierarchy; avoid inventing ARIA roles that contradict native text semantics. If tables are used, ensure labels and sample relationships are understandable, with header semantics where appropriate; do not add interactive tab stops merely for static text.
11. Keep text readable at narrow mobile and short landscape widths, during resize and text enlargement. Long headings, unbroken text, description terms and quotations must not cause unintended horizontal page scrolling or hidden sample content. If a wide example requires a contained adaptation, preserve access and disclose any material change from the reference.
12. Truncation must be intentional only in the designated example, with the full term remaining available to assistive technology and a practical non-pointer reading path. Other sample text must not be silently clipped to fit cards. Muted text, fine print and labels must remain readable; document accessibility-driven contrast or sizing adjustments.
13. This showcase is primarily static. Do not add forms, animation, tooltips, network actions or controls absent from the verified reference merely to demonstrate typography. Any actual reference links must have safe local demonstration behavior unless a real destination is explicitly authorized.
14. Reuse existing shell/resources and preserve sidebar keyboard/focus behavior and unrelated user changes. Avoid unnecessary dependencies; if icons are actually needed, use local Font Awesome instead of SVG.
15. Compare the rendered reference at desktop/mobile widths before finalizing. Report wording/font substitutions, layout adaptations, accessibility changes, actual tests and remaining verification limits.

## Constraints
- Ordinary HTML/CSS/JavaScript compatible with the static repository; no framework or backend migration.
- Original task brief remains immutable. Later skills own BA, plans, application source/tests, assets and rollback metadata.
- Retrieved markup establishes initial group inventory only; font licensing/availability, exact geometry, responsive breakpoints and complete sample content require investigation.
- No global font replacement or real data operation is authorized by this request.

## Acceptance Criteria
1. A directly viewable page contains all seven verified cards and the complete heading, text, quote and list example inventory.
2. Heading/customized/display hierarchies, paragraph variants and inline styles reproduce the relevant reference treatments with documented font/metric deviations.
3. Inline text, abbreviations, quotations, attributions and list/description relationships use meaningful native semantics and retain verified sample content.
4. Card/example labels and any table relationships remain understandable; intentional truncation preserves access to the complete term.
5. Mobile, short landscape, resize, text enlargement and long content retain readable examples without unintended page overflow or accidental clipping.
6. Styles remain scoped; required resources load without functional errors and shared shell/sidebar behavior remains operational.
7. No unrequested interaction, backend operation, external font reliance or navigation is introduced without explanation and authorization where needed.
8. Reference comparison, actual tests, substitutions, accessibility adjustments and unverified behavior are reported accurately.

## Validation Expectations
- Inspect live reference desktop/mobile to verify seven-card inventory, all customized-heading content, sample text/list counts, quote/description relationships and responsive arrangements.
- Inspect computed font family, font availability, weights, sizes, line-heights, muted colors, spacing and display scaling; verify local asset/license feasibility before choosing fonts.
- Check semantic elements, abbreviation expansions, citation/attribution markup, list nesting, description pairs, table/example labels and intentional truncation access.
- Test narrow mobile, short landscape, desktop, resize, text enlargement, long headings/unbroken text and long description terms. Distinguish intentional truncation from inaccessible clipping.
- Compare screenshots for representative sizes/weights/alignments and overall card layout. Check HTTP/file viewing, resource/runtime errors, style scope and sidebar coexistence; run relevant regressions for any shared assets changed.
- No application tests or browser interaction validation were performed during task-create.

## Assumptions and Open Questions
- Assume root-level typography.html, English reference sample content and the existing light shell.
- Q-001: Confirm exact customized-heading examples, list inventory, text content and any genuine links during analysis.
- Q-002: Determine the reference font and whether authorized local assets can match it; document any fallback instead of silently changing fonts globally.
- Q-003: Verify responsive display sizes, description-list alignment threshold and the intended truncation behavior.
- Q-004: Establish readable label/muted/fine-print treatment and a non-pointer path to the full truncated term if accessibility adjustments are required.
- No blocking clarification is needed to create this brief. Any later business ambiguity or font-asset constraint affecting scope must be surfaced before dependent implementation.