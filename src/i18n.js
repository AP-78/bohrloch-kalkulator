/*
 * bohrloch-kalkulator — UI strings
 * SPDX-License-Identifier: GPL-3.0-or-later
 * Copyright (C) 2026 AP-78 <kontakt@ap78.de>
 *
 * One dictionary per BCP 47 language tag. To add a language, copy a block,
 * translate the values and keep the keys. Missing keys fall back to "en".
 * - Values bound with data-i18n-html in the page (guide.*, info.* paragraphs) may contain
 *   trusted markup (strong, a, span); everything else is inserted as plain text.
 * - Placeholders look like {name}.
 * - csv.* values end up in a comma-separated file: keep csv.comment free of commas.
 */
const I18N = {

  de: {
    'lang.name': 'Deutsch',
    'lang.label': 'Sprache wählen',
    'unit.switch': 'Einheit wählen',
    'unit.switchMm': 'mm',
    'unit.switchInch': 'inch',
    'unit.mm': 'mm',
    'unit.inch': 'in',

    'app.title': 'Bohrloch-Abstandsrechner',

    'title.label': 'Projektname:',
    'title.placeholder': 'Projektname eingeben (z. B. Frontplatte oben)',
    'project.default': 'Projekt ohne Namen',

    'card.width': 'Breite (horizontal)',
    'card.height': 'Höhe (vertikal)',
    'field.outer': 'Außenkante → Außenkante',
    'field.inner': 'Innenkante → Innenkante',
    'field.placeholder': 'Maß eingeben',
    'formula.text': 'Mittenabstand = (Außen + Innen) / 2  ·  Ø = (Außen − Innen) / 2',
    'warn.innerGtOuter': '⚠ Innenkante muss kleiner als Außenkante sein.',

    'results.header': 'Ergebnisse',
    'results.centerWidth': 'Mittenabstand Breite',
    'results.centerHeight': 'Mittenabstand Höhe',
    'results.diameter': 'Lochdurchmesser Ø',
    'results.fromWidth': 'aus Breite',
    'results.fromHeight': 'aus Höhe',
    'results.mismatch': 'B: {w} · H: {h} {u}',

    'btn.clear': 'Felder leeren',
    'btn.csv': 'Fusion-CSV',
    'btn.save': 'Messung speichern',
    'btn.saved': '✓ Gespeichert',
    'btn.delete': 'Löschen',
    'btn.close': 'Schließen',

    'diagram.hole': 'Loch {n}',

    'tab.archive': 'Archiv',
    'tab.guide': 'Anleitung',
    'tab.info': 'Info',

    'archive.title': 'Gespeicherte Messungen',
    'archive.empty': 'Noch keine Messungen gespeichert.',
    'archive.width': 'B: {a} / {i} {u}',
    'archive.height': 'H: {a} / {i} {u}',
    'archive.result': '→ {mb} × {mh} {u}',
    'archive.dia': 'Ø {d} {u}',

    'guide.title': 'Kurzanleitung',
    'guide.i1': 'Projektnamen eingeben, z. B. <strong>„Frontplatte links“</strong>',
    'guide.i2': 'Außen- und Innenkante in mm eingeben — jeweils für <strong>Breite</strong> und <strong>Höhe</strong>',
    'guide.i3': 'Werte mit den <strong>−/+</strong> Buttons feinjustieren (je {step}) oder direkt tippen',
    'guide.i4': 'Mit <strong>Enter</strong> oder <strong>Tab</strong> springt der Cursor automatisch zum nächsten Feld',
    'guide.i5': 'Ergebnisse (Mittenabstand Breite, Höhe und Lochdurchmesser) erscheinen sofort',
    'guide.i6': 'Messung über <strong>„Messung speichern“</strong> ins Archiv übernehmen',
    'guide.i7': 'Archiv über den <strong>Archiv</strong>-Tab aufklappen — gespeicherte Messungen anklicken zum Wiederladen',
    'guide.i8': '<strong>„Fusion-CSV“</strong> exportiert Mittenabstände und Ø als Fusion-360-Parameter (<span class="panel-chip">&lt;Projektname&gt;_bl_h</span> <span class="panel-chip">_bl_v</span> <span class="panel-chip">_bl_dia</span>) — in Fusion über Parameter ändern → Import. Nur aktiv, wenn Breite und Höhe gültig sind; Ø = Mittelwert aus Breite und Höhe',
    'guide.i9': 'Mit <strong>„Felder leeren“</strong> alle Eingaben zurücksetzen für eine neue Messung',
    'guide.i10': 'Mit dem Schalter <strong>mm | inch</strong> im Header die Einheit für Eingaben, Anzeige und CSV-Export wechseln — vorhandene Werte werden umgerechnet, das Archiv bleibt intern in mm',
    'guide.keys': 'Tastaturkürzel',
    'guide.k1': '<span class="panel-chip">Enter</span> oder <span class="panel-chip">Tab</span> — nächstes Feld',
    'guide.k2': '<span class="panel-chip">↑</span> <span class="panel-chip">↓</span> — Wert um {step} ändern',

    'info.title': 'Info',
    'info.purposeH': 'Zweck',
    'info.purpose': 'Dieses Tool berechnet den <strong>Mittenabstand</strong> zweier Bohrlöcher sowie den <strong>Lochdurchmesser</strong> — ausgehend von den messbaren Außen- und Innenkanten. So lassen sich präzise CAD-Maße direkt aus Schieblehren-Messungen ableiten, ohne manuell rechnen zu müssen.',
    'info.useH': 'Einsatzbereich',
    'info.use1': 'Reverse Engineering von Bauteilen und Gehäusen',
    'info.use2': 'Übertragung von Maßen in CAD-Software (z. B. Fusion 360)',
    'info.use3': 'Vorbereitung von Bohrbildern für den 3D-Druck oder CNC-Fräsen',
    'info.use4': 'Qualitätskontrolle gefertigter Teile',
    'info.storageH': 'Datenspeicherung',
    'info.storage': 'Alle Messungen werden ausschließlich lokal im Browser gespeichert (localStorage). Es werden keine Daten übertragen oder in der Cloud abgelegt. Die App funktioniert vollständig offline.',
    'info.versionH': 'Version',
    'info.version': 'v3.1 · dark · 11.10.2026 · 4-Loch-Grafik',
    'info.legalH': 'Rechtliches',
    'info.copyright': '© 2026 AP-78 · <a href="mailto:kontakt@ap78.de">kontakt@ap78.de</a>',
    'info.license': 'Freie Software unter der <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank" rel="noopener">GNU GPL v3.1 oder neuer</a> — ohne jede Gewährleistung.',
    'info.source': 'Quellcode: <a href="https://github.com/AP-78/bohrloch-kalkulator" target="_blank" rel="noopener">github.com/AP-78/bohrloch-kalkulator</a>',
    'info.icon': 'Icons: <a href="https://fontawesome.com/license/free" target="_blank" rel="noopener">Font Awesome Free</a> (CC BY 4.0)',
    'info.disclaimer': 'Dieses Projekt steht in keiner Verbindung zu Autodesk. Fusion 360 ist eine Marke von Autodesk, Inc. Alle Ergebnisse ohne Gewähr — Maße vor der Fertigung prüfen.',

    'footer.text': 'bohrloch-rechner.html · läuft vollständig offline · Daten werden lokal im Browser gespeichert · v3.1 DARK · 4-Loch-Grafik ✓',

    'csv.header': 'Name,Einheit,Ausdruck,Wert,Kommentare,Favorit',
    'csv.comment': 'Messung vom: {d}',
    'csv.needName': 'Bitte einen Projektnamen eingeben (Buchstaben oder Ziffern), er wird Teil der Parameternamen.'
  },

  en: {
    'lang.name': 'English',
    'lang.label': 'Choose language',
    'unit.switch': 'Choose unit',
    'unit.switchMm': 'mm',
    'unit.switchInch': 'inch',
    'unit.mm': 'mm',
    'unit.inch': 'in',

    'app.title': 'Drill Hole Distance Calculator',

    'title.label': 'Project name:',
    'title.placeholder': 'Enter project name (e.g. Front panel top)',
    'project.default': 'Untitled project',

    'card.width': 'Width (horizontal)',
    'card.height': 'Height (vertical)',
    'field.outer': 'Outer edge → outer edge',
    'field.inner': 'Inner edge → inner edge',
    'field.placeholder': 'Enter value',
    'formula.text': 'Center distance = (outer + inner) / 2  ·  Ø = (outer − inner) / 2',
    'warn.innerGtOuter': '⚠ Inner edge must be smaller than outer edge.',

    'results.header': 'Results',
    'results.centerWidth': 'Center distance width',
    'results.centerHeight': 'Center distance height',
    'results.diameter': 'Hole diameter Ø',
    'results.fromWidth': 'from width',
    'results.fromHeight': 'from height',
    'results.mismatch': 'W: {w} · H: {h} {u}',

    'btn.clear': 'Clear fields',
    'btn.csv': 'Fusion CSV',
    'btn.save': 'Save measurement',
    'btn.saved': '✓ Saved',
    'btn.delete': 'Delete',
    'btn.close': 'Close',

    'diagram.hole': 'Hole {n}',

    'tab.archive': 'Archive',
    'tab.guide': 'Guide',
    'tab.info': 'Info',

    'archive.title': 'Saved measurements',
    'archive.empty': 'No measurements saved yet.',
    'archive.width': 'W: {a} / {i} {u}',
    'archive.height': 'H: {a} / {i} {u}',
    'archive.result': '→ {mb} × {mh} {u}',
    'archive.dia': 'Ø {d} {u}',

    'guide.title': 'Quick guide',
    'guide.i1': 'Enter a project name, e.g. <strong>“Front panel left”</strong>',
    'guide.i2': 'Enter outer and inner edge in mm — for both <strong>width</strong> and <strong>height</strong>',
    'guide.i3': 'Fine-tune values with the <strong>−/+</strong> buttons ({step} each) or type directly',
    'guide.i4': 'Press <strong>Enter</strong> or <strong>Tab</strong> to jump to the next field',
    'guide.i5': 'Results (center distance width, height and hole diameter) appear instantly',
    'guide.i6': 'Use <strong>“Save measurement”</strong> to add the measurement to the archive',
    'guide.i7': 'Open the archive via the <strong>Archive</strong> tab — click a saved measurement to reload it',
    'guide.i8': '<strong>“Fusion CSV”</strong> exports the center distances and Ø as Fusion 360 parameters (<span class="panel-chip">&lt;project name&gt;_bl_h</span> <span class="panel-chip">_bl_v</span> <span class="panel-chip">_bl_dia</span>) — in Fusion via Change Parameters → Import. Only enabled when width and height are valid; Ø = mean of the width and height values',
    'guide.i9': 'Use <strong>“Clear fields”</strong> to reset all inputs for a new measurement',
    'guide.i10': 'Use the <strong>mm | inch</strong> switch in the header to change the unit for input, display and CSV export — existing values are converted, the archive stays in mm internally',
    'guide.keys': 'Keyboard shortcuts',
    'guide.k1': '<span class="panel-chip">Enter</span> or <span class="panel-chip">Tab</span> — next field',
    'guide.k2': '<span class="panel-chip">↑</span> <span class="panel-chip">↓</span> — change value by {step}',

    'info.title': 'Info',
    'info.purposeH': 'Purpose',
    'info.purpose': 'This tool calculates the <strong>center distance</strong> of two drill holes and the <strong>hole diameter</strong> from the measurable outer and inner edges. That way, precise CAD dimensions can be derived directly from caliper measurements without calculating by hand.',
    'info.useH': 'Use cases',
    'info.use1': 'Reverse engineering of parts and enclosures',
    'info.use2': 'Transferring dimensions into CAD software (e.g. Fusion 360)',
    'info.use3': 'Preparing hole patterns for 3D printing or CNC milling',
    'info.use4': 'Quality control of manufactured parts',
    'info.storageH': 'Data storage',
    'info.storage': 'All measurements are stored locally in your browser only (localStorage). No data is transmitted or stored in the cloud. The app works completely offline.',
    'info.versionH': 'Version',
    'info.version': 'v3.1 · dark · 2026-10-11 · 4-hole diagram',
    'info.legalH': 'Legal',
    'info.copyright': '© 2026 AP-78 · <a href="mailto:kontakt@ap78.de">kontakt@ap78.de</a>',
    'info.license': 'Free software under the <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank" rel="noopener">GNU GPL v3.1 or later</a> — without any warranty.',
    'info.source': 'Source code: <a href="https://github.com/AP-78/bohrloch-kalkulator" target="_blank" rel="noopener">github.com/AP-78/bohrloch-kalkulator</a>',
    'info.icon': 'Icons: <a href="https://fontawesome.com/license/free" target="_blank" rel="noopener">Font Awesome Free</a> (CC BY 4.0)',
    'info.disclaimer': 'This project is not affiliated with Autodesk. Fusion 360 is a trademark of Autodesk, Inc. All results without warranty — verify dimensions before manufacturing.',

    'footer.text': 'bohrloch-rechner.html · runs completely offline · data is stored locally in the browser · v3.1 DARK · 4-hole diagram ✓',

    'csv.header': 'Name,Unit,Expression,Value,Comments,Favorite',
    'csv.comment': 'Measured on: {d}',
    'csv.needName': 'Please enter a project name (letters or digits); it becomes part of the parameter names.'
  }

};
