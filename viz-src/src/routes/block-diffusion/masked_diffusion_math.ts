// Data helpers for the masked-diffusion-on-text figure.
//
// Trimmed down from DiffusionExplorer's masked_diffusion_math.ts to just the
// two exports GenerationComparisonFigure actually uses (the rest of that
// file's forward-process math is used by other figures we didn't port).
//
// Everything here is deterministic and SSR-safe (no Math.random, no
// Date.now) so the server and client agree on the initial render.

/** A short TinyStories-style paragraph, hand-written for the figure.
 *  Sized to exactly 48 tokens under the shared `tokenize()` rules so the
 *  block-diffusion figure lays out cleanly on 4 lines × 12 tokens each.
 *  Every word is at most 6 characters long so constant-width token cells
 *  can hold each word without truncation or an ellipsis. */
export const TINY_STORY =
	'Once there was a small cat named Milo. ' +
	'He lived in a tall red house on a big green hill. ' +
	'Every day he sat by the door and saw the birds fly by. ' +
	'One day a bird came and sang a song for him.';

export interface Tokenized {
	/** The word tokens themselves (no leading whitespace or punctuation). */
	tokens: string[];
	/**
	 * The literal text that appears before each token in the original string
	 * (leading whitespace, opening quotes, etc.). Same length as `tokens`.
	 */
	leading: string[];
	/**
	 * The literal text that appears after each token before the next one
	 * (trailing punctuation and whitespace). Same length as `tokens`; the last
	 * entry may include the paragraph-final punctuation.
	 */
	trailing: string[];
}

/**
 * Split `text` into tokens while preserving whitespace so the paragraph can be
 * re-rendered faithfully whether each slot is showing its original content or
 * the sentinel `[MASK]`. Two token flavors are extracted:
 *
 *   - words: maximal runs of letters/digits/apostrophes;
 *   - punctuation: maximal runs of non-word, non-whitespace characters (`.` `,`
 *     `?` `!` `"` etc.) — each punctuation run is its own token, so periods
 *     etc. can flip to `[MASK]` independently of the words they follow.
 *
 * Whitespace is not tokenized; it lives in each token's `leading` slot so
 * re-rendering preserves the original spacing.
 */
export function tokenize(text: string): Tokenized {
	const tokenRe = /[A-Za-z0-9']+|[^A-Za-z0-9'\s]+/g;
	const tokens: string[] = [];
	const leading: string[] = [];
	const trailing: string[] = [];
	let cursor = 0;
	let match: RegExpExecArray | null;
	while ((match = tokenRe.exec(text)) !== null) {
		const start = match.index;
		const end = start + match[0].length;
		leading.push(text.slice(cursor, start));
		tokens.push(match[0]);
		trailing.push('');
		cursor = end;
	}
	if (tokens.length > 0) {
		trailing[trailing.length - 1] = text.slice(cursor);
	}
	return { tokens, leading, trailing };
}
