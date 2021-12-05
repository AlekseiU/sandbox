module.exports = {
	plugins: ['react', 'react-hooks', 'import', 'jsx-a11y'],
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'airbnb',
		'plugin:react/recommended',
		'plugin:compat/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
		'plugin:import/errors',
		'plugin:import/typescript',
		'prettier',
		'prettier/react',
		'prettier/@typescript-eslint',
	],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		project: './tsconfig.json',
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'no-param-reassign': 0,
		'no-plusplus': 0,
		'no-shadow': 'off',
		'no-use-before-define': 0,
		'consistent-return': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
		'react/jsx-max-props-per-line': 0,
		'react/no-unused-prop-types': 0,
		'react/require-default-props': 0,
		'react/jsx-uses-react': 1,
		'react/destructuring-assignment': ['error', 'always', { ignoreClassFields: true }],
		'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-props-no-spreading': 0,
		'react/jsx-wrap-multilines': 0,
		'react/no-array-index-key': 0,
		'react/display-name': [0, { ignoreTranspilerName: true }],
		'react/prop-types': 0,
		'react/static-property-placement': ['error', 'static public field'],
		'global-require': 0,
		'import/no-duplicates': 2,
		'import/prefer-default-export': 0,
		'import/no-default-export': 2,
		'import/no-cycle': 2,
		'import/no-mutable-exports': 0,
		'import/extensions': 0,
		'import/no-extraneous-dependencies': [
			2,
			{
				devDependencies: false,
			},
		],
		'import/no-unused-modules': 'off',
		'no-useless-constructor': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-shadow': 'error',
		'@typescript-eslint/no-use-before-define': 'error',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-useless-constructor': 'error',
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'@typescript-eslint/prefer-literal-enum-member': 'error',
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				prefer: 'type-imports',
			},
		],
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'variable',
				format: ['camelCase', 'UPPER_CASE'],
				types: ['boolean', 'number', 'string'],
			},
			{
				selector: 'variable',
				format: ['camelCase', 'PascalCase'],
				types: ['function'],
			},
			{
				selector: 'memberLike',
				modifiers: ['private'],
				format: ['camelCase'],
				leadingUnderscore: 'forbid',
			},
			{
				selector: 'interface',
				format: ['PascalCase'],
			},
			{
				selector: 'enumMember',
				format: ['PascalCase'],
			},
			{
				selector: 'enum',
				format: ['PascalCase'],
			},
		],
		'comma-dangle': ['error', 'always-multiline'],
		'no-unused-vars': ['error', { ignoreRestSiblings: true }],
		'jsx-a11y/label-has-associated-control': [
			'error',
			{
				required: {
					some: ['nesting', 'id'],
				},
			},
		],
		'arrow-body-style': [2, 'as-needed'],
		curly: [2, 'all'],
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
			{
				blankLine: 'any',
				prev: ['const', 'let', 'var'],
				next: ['const', 'let', 'var'],
			},
			{ blankLine: 'always', prev: '*', next: 'return' },
		],
		'no-restricted-imports': [
			'error',
			{
				paths: [
					{
						name: 'classnames/bind',
						message: 'Please dont use bind syntax and use `clsx` instead',
					},
					{
						name: 'classnames',
						message: 'Please use `clsx` instead',
					},
					{
						name: '@material-ui/core/styles',
						importNames: ['makeStyles', 'createStyles'],
						message: 'Please import from `@material-ui/core` instead',
					},
				],
				patterns: ['@abbyy/ui/src/*', '@abbyy/shared/src/*', '@abbyy/analytics/src/*'],
			},
		],
	},
	env: {
		browser: true,
	},
	settings: {
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
				project: 'tsconfig.json',
			},
			node: {
				extensions: ['.ts', '.tsx', '.js', '.jsx', '.d.ts'],
			},
		},
	},
	overrides: [
		{
			files: ['**/*.spec.*', '**/*.mock.*'],
			rules: {
				'import/no-default-export': 'off',
				'@typescript-eslint/no-empty-function': 'off',
				'@typescript-eslint/no-non-null-assertion': 'off',
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/ban-types': 'off',
				'func-names': 'off',
			},
		},
		{
			files: ['**/*.stories.*'],
			rules: {
				'import/no-default-export': 'off',
				'import/no-extraneous-dependencies': 'off',
				'react/display-name': 'off',
			},
		},
		{
			files: ['*.d.ts'],
			rules: {
				'prettier/prettier': 'off',
				'import/no-default-export': 'off',
				'import/no-extraneous-dependencies': 'off',
				'react/display-name': 'off',
			},
		},
		{
			files: ['**/mocks/**/*.js', '*.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
				'@typescript-eslint/no-unused-vars': 'off',
				'import/no-extraneous-dependencies': 'off',
				'no-unused-vars': 'off',
			},
		},
		{
			files: ['**/*.mocks.*'],
			rules: {
				'import/no-extraneous-dependencies': 'off',
			},
		},
	],
	globals: {
		describe: true,
		it: true,
		jest: true,
		beforeEach: true,
		beforeAll: true,
		afterEach: true,
		expect: true,
		afterAll: true,
	},
};
