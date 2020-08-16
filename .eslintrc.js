module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: "plugin:react/recommended",
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {},
	settings: {
		"import/resolver": {
			"babel-plugin-root-import": {
				rootPathSuffix: "src",
			},
		},
	},
};
