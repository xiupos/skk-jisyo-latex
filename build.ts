const src = await Deno.readTextFile("./unicode_latex_unicodemath.json");
const dat = JSON.parse(src) as string[][];
let dic = `;; -*- fundamental -*- ; coding: utf-8 -*-
;; LaTeX Symbol Dictionary
;; Copyright: (c) 2021 TANIGUCHI Masaya
;;
;; Original: http://milde.users.sourceforge.net/LUCR/Math/unimathsymbols.html
;; Copyright: (c) 2011 G\"unter Milde
;; Date: Last revised 2011-11-08
;; License: This work may be distributed and/or modified under the condition of
;;          LaTeX Project Public License, eiter version 1.3 of this license or
;;          (at your option) any later version.
;; okuri-ari entries.
;; okuri-nasi entries.
`;
const lines: string[] = [];
for (const [_, character, latex, uniMath] of dat) {
  if (latex && !latex.match(/[^a-zA-Z\\]/) && latex[0] === "\\") {
    lines.push(`${latex.slice(1)} /${character}/` + "\n");
  }
  if (latex === uniMath) continue;
  if (uniMath && !uniMath.match(/[^a-zA-Z\\]/) && uniMath[0] === "\\") {
    lines.push(`${uniMath.slice(1)} /${character}/` + "\n");
  }
}
// Sort alphabetically
dic += lines.sort().join("");
await Deno.writeTextFile("./SKK-JISYO.latex.utf8", dic);
