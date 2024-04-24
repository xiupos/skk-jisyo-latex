all: SKK-JISYO.latex.unicode-math.utf8

.PHONY: SKK-JISYO.latex.unicode-math.utf8

SKK-JISYO.latex.unicode-math.utf8:
	deno run --allow-read --allow-write build.ts
