/**
 * @param {String} block
 * @param {Object} [presetOptions]
 * @param {String} [presetOptions.namespace]
 * @returns {RegExp}
 */
const bemSelector = (block, presetOptions) => {
	const ns = presetOptions && presetOptions.namespace ? `${presetOptions.namespace}-` : "";
	const WORD = "[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*";
	const element = `(?:__${WORD})?`;
	const modifier = `(?:--${WORD}){0,2}`;
	const attribute = "(?:\\[.+\\])?";
	return new RegExp(`^\\.${ns}${block}${element}${modifier}${attribute}$`);
};

module.exports = {
	extends: ["stylelint-config-recommended-scss", "stylelint-config-recess-order"],
	plugins: [
		"stylelint-order",
		"stylelint-scss",
		"stylelint-selector-bem-pattern",
	],
	overrides: [
		{
			files: ["scss/**/*.scss"],
			customSyntax: "postcss-scss",
		},
	],
	rules: {
		indentation: "tab",
		"no-invalid-double-slash-comments": true,
		"at-rule-no-unknown": null,
		"scss/at-rule-no-unknown": true,
		"at-rule-empty-line-before": [
			"always",
			{
				except: ["blockless-after-same-name-blockless", "first-nested"],
				ignore: ["after-comment"],
				ignoreAtRules: ["else", "include"],
			},
		],
		"block-closing-brace-newline-after": [
			"always",
			{
				ignoreAtRules: ["else", "if"],
			},
		],
		"declaration-empty-line-before": [
			"always",
			{
				except: ["after-declaration", "first-nested", "after-comment"],
			},
		],
		"rule-empty-line-before": [
			"always",
			{
				except: ["first-nested", "after-single-line-comment"],
			},
		],
		"number-leading-zero": "always",
		"selector-combinator-space-before": "always",
		"color-hex-length": "short",
		"color-hex-case": "lower",
		"alpha-value-notation": "number",
		"no-descending-specificity": null,
		"order/order": [
			[
				{
					type: "at-rule",
					name: "return",
				},
			],
		],
		"comment-empty-line-before": [
			"always",
			{
				except: ["first-nested"],
				ignore: ["after-comment", "stylelint-commands"],
			},
		],
		"function-parentheses-newline-inside": "never-multi-line",
		"value-keyword-case": [
			"lower",
			{
				ignoreKeywords: ["commonOver"],
			},
		],
		"function-name-case": [
			"lower",
			{
				ignoreFunctions: ["colorScheme", "zIndex", "func.zIndex"],
			},
		],
		"plugin/selector-bem-pattern": {
			preset: "bem",
			componentSelectors: bemSelector,
		},
	},
};
