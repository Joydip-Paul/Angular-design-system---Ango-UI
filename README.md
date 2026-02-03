# Ango UI

Ango UI is an Angular design system built with Atomic Design, Signals, and OnPush.
The goal: let teams copy one folder and start shipping consistent UI fast.

## Highlights
- Atomic structure: atoms, molecules, organisms, templates, pages.
- Copy-first: users can copy `src/app/lib/atomic` into their own Angular apps.
- Design system docs with a left sidebar + right preview + copyable code snippets.

## Quick Start
```bash
npm install
npm run start
```

Open `http://localhost:4200/` to see the landing page.

## App Routes
- `/` Landing page
- `/design-system` Design system overview
- `/design-system/components` Components gallery
- `/design-system/components/buttons` Button variants
- `/design-system/components/inputs` Input variants

## Atomic Folder (Copy This)
The entire design system lives inside:
```
src/app/lib/atomic
```

Copy that folder into your Angular project and use the components directly:
```
src/app/lib/atomic/atoms
src/app/lib/atomic/molecules
src/app/lib/atomic/organisms
src/app/lib/atomic/utils
src/app/lib/atomic/tokens
```

## Tokens
Edit tokens here to match your brand:
```
src/app/lib/atomic/tokens/tokens.scss
```

## Project Structure
```
src/
  app/
    features/
      landing/
      design-system/
    lib/
      atomic/
        atoms/
        molecules/
        organisms/
        templates/
        pages/
        utils/
        tokens/
```

## Scripts
- `npm run start` Dev server
- `npm run build` Production build
- `npm run test` Unit tests

## Built With
- Angular 20
- Standalone components
- Signals + OnPush
