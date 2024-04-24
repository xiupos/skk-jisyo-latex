# SKK JISYO LaTeX

SKKによるLaTeX記号の入力を支援する辞書です。数学記号はUTF8を参考にしているため
辞書ファイルはUTF8でエンコードされています。したがって、古いSKK入力ソフトでは
使用でないかもしれません。使用するためには、リポジトリ内にある
`SKK-JISYO.latex.unicode-math.utf8` をダウンロードし、補助辞書に指定してください。

辞書ファイルのライセンスは元データにしたがい、LaTeX Public License 1.3 もしくは
それより最新のバージョンとします。詳しくは `LICENSE` ファイルを参照してください。

## SKK JISYO LaTeX unicode-math

オリジナルの [`SKK-JISYO.latex.utf8`](https://github.com/tani/skk-jisyo-latex) は
[LaTeX Unicode Character References](https://milde.users.sourceforge.net/LUCR/Math/unimathsymbols.html)
を参照しているのに対し、`SKK-JISYO.latex.unicode-math.utf8` は
[latex3/unicode-math](https://github.com/latex3/unicode-math) のテーブルを参照しています。
