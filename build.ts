const src = await Deno.readTextFile("./unicode-math/unicode-math-table.tex");
const dat = src
  .split("\n")
  .map((line: string) => line.split("%")[0])
  .filter(Boolean)
  .map((line) => [...line.matchAll(/\{([^\{\}]*)\}/g)].map((a) => a[1].trim()));
let dic = `;; -*- fundamental -*- ; coding: utf-8 -*-
;; LaTeX Symbol Dictionary using unicode-math
;; Copyright (c) 2021 TANIGUCHI Masaya
;; Copyright (c) 2024 xiupos
;;
;; Original: https://github.com/latex3/unicode-math/blob/master/unicode-math-table.tex
;; Copyright (c) 2006-2019  Will Robertson, LPPL "maintainer"
;; Copyright (c) 2010-2017  Philipp Stephani
;; Copyright (c) 2011-2017  Joseph Wright
;; Copyright (c) 2012-2015  Khaled Hosny
;;
;; okuri-ari entries.
;; okuri-nasi entries.
`;
const lines: string[] = [];
for (const line of dat) {
  const symbol = String.fromCodePoint(Number("0x" + line[0].slice(1)));
  const command = line[1].slice(1);
  const description = String(line[3]).replace(/\//g, '');
  lines.push(`${command} /${symbol};${description}/`);
}
// Sort alphabetically
dic += lines.sort().join("\n");
await Deno.writeTextFile("./SKK-JISYO.latex.unicode-math.utf8", dic);
