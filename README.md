# Drill Hole Distance Calculator (Bohrloch-Abstandsrechner)

A small, fully offline web tool that turns caliper measurements of drill holes into CAD-ready dimensions.
Enter the outer and inner edge distances (width and height) and get the **center distances** and the
**hole diameter**. Export them as **Fusion 360 user parameters** (CSV).

- Single HTML page, no build step, no dependencies, no network requests
- Measurements are kept in your browser (`localStorage`) only
- UI languages: English, Deutsch (picked from the browser language, switchable via the globe icon in the header)

## Usage

Open `src/bohrloch-rechner.html` in a browser. Keep `src/i18n.js` next to it.

| Input | Meaning |
| --- | --- |
| Outer edge → outer edge | caliper reading across the outside of two holes |
| Inner edge → inner edge | caliper reading across the inside of two holes |

```
center distance = (outer + inner) / 2        diameter Ø = (outer − inner) / 2
```

### Fusion 360 CSV export

The **Fusion CSV** button writes `<project>_params_YYYY-MM-DD.csv` with three parameters:

| Parameter | Value |
| --- | --- |
| `<project>_bl_h` | center distance, width (horizontal) |
| `<project>_bl_v` | center distance, height (vertical) |
| `<project>_bl_dia` | hole diameter Ø (mean of the width- and height-derived values) |

The file follows the layout of Fusion's own parameter export (`Name,Unit,Expression,Value,Comments,Favorite`);
the column names follow the selected UI language.
The German layout was verified against a Fusion 360 export; **the English column names are unverified**.
Project names are sanitized to valid parameter names (umlauts transliterated, other special characters become `_`).

## Adding a language

Copy a block in [`src/i18n.js`](src/i18n.js), use a [BCP 47](https://www.rfc-editor.org/info/bcp47) tag as key
(e.g. `fr`) and translate the values. Missing keys fall back to English. The new language appears in the menu automatically.

## License

Copyright (C) 2026 AP-78 · <kontakt@ap78.de>

This program is free software: you can redistribute it and/or modify it under the terms of the
GNU General Public License as published by the Free Software Foundation, either version 3 of the License,
or (at your option) any later version. It is distributed without any warranty. See [LICENSE](LICENSE).

The language icon is [Font Awesome Free](https://fontawesome.com/license/free) (icons: CC BY 4.0), embedded with its original attribution comment.
Fusion 360 is a trademark of Autodesk, Inc.; this project is not affiliated with Autodesk.

---

## Kurzfassung (Deutsch)

Kleines Offline-Tool: aus Schieblehren-Messungen (Außen-/Innenkante, Breite und Höhe) werden
**Mittenabstände** und **Lochdurchmesser** berechnet und als **Fusion-360-Parameter** (CSV) exportiert.
`src/bohrloch-rechner.html` im Browser öffnen, `src/i18n.js` muss daneben liegen. Die Sprache (Deutsch/English)
lässt sich über das Globus-Icon im Header wählen. Lizenz: GPL-3.0-or-later (siehe [LICENSE](LICENSE)).
