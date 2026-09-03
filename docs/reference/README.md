# Supplied visual references

The repository preserves all 27 original JPEG files supplied by the user before
`GROUP 00`. They are immutable design and product-truth references, not
production web assets.

- `assets/references/photo-*.jpg`: overview/mobile product references plus eight
  Owner identity and pose references. The Owner files have baked backgrounds
  and cannot be shipped as production cutouts.
- `assets/references/dashboard/`: the supplied logo and seven additional
  real-product references. These remain research inputs until manifest exports
  are captured and approved at the required size.
- `docs/reference/*.jpg`: nine landing-page composition references.

`source.sha256` records the canonical paths and is checked by
`npm run test:source`. Do not edit, optimize, crop, recolor, or move these files.
Derived and approved source work belongs in `design-source/`; production exports
belong only in manifest-declared `public/` paths.
