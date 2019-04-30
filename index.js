module.exports = {
  'extends': [
    'eslint:recommended'
  ],
  'rules': {
    'accessor-pairs': 'error',
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never'],
    'array-callback-return': 'error',
    'array-element-newline': ['error', 'consistent'],
    'arrow-body-style': ['warn', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',
    'block-scoped-var': 'error',
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    'callback-return': 'error',
    'camelcase': 'error',
    'capitalized-comments': 0,
    'class-methods-use-this': 'warn',
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', {'before': false, 'after': true}],
    'comma-style': ['error', 'last'],
    'complexity': 0,
    'computed-property-spacing': ['error', 'never'],
    'consistent-return': 'error',
    'consistent-this': ['error', 'that'],
    'constructor-super': 'error',
    'curly': 'error',
    'default-case': ['error', { 'commentPattern': '^no default$' }],
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': 'error',
    'function-paren-newline': ['error', 'consistent'],
    'func-call-spacing': ['error', 'never'],
    'func-names': 'error',
    'func-name-matching': 'error',
    'func-style': ['error', 'expression'],
    'generator-star-spacing': ['error', 'after'],
    'global-require': 'error',
    'guard-for-in': 'error',
    'handle-callback-err': 'error',
    'id-blacklist': ['error', 'callback'],
    'id-length': 0,
    'id-match': 0,
    'implicit-arrow-linebreak': 'error',
    'indent': ['off', 2, { 'SwitchCase': 1 , 'VariableDeclarator': { 'var': 2, 'let': 2, 'const': 3 }}],
    'init-declarations': ['error', 'never', { 'ignoreForLoopInit': true }],
    'jsx-quotes': ['error', 'prefer-double'],
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
    'keyword-spacing': 'error',
    'linebreak-style': ['error', 'unix'],
    'line-comment-position': 0,
    'lines-around-comment': 0,
    'lines-between-class-members': ['error', 'always'],
    'max-classes-per-file': 0,
    'max-depth': ['warn', 4],
    'max-len': 0,
    'max-lines': 0,
    'max-lines-per-function': 0,
    'max-nested-callbacks': 0,
    'max-params': 0,
    'max-statements': 0,
    'max-statements-per-line': ['warn', { 'max': 1 }],
    'multiline-comment-style': 0,
    'multiline-ternary': ['error', 'always-multiline'],
    'new-cap': 'error',
    'new-parens': 'error',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var'],
        next: '*'
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var'],
        next: ['const', 'let', 'var']
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return'
      }
    ],
    'newline-per-chained-call': ['warn', { 'ignoreChainWithDepth': 4 }],
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'warn',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-class-assign': 'error',
    'no-confusing-arrow': 'error',
    'no-console': ['warn', { 'allow': ['warn', 'error'] }],
    'no-const-assign': 'error',
    'no-continue': 'error',
    'no-div-regex': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': ['error', 'all', {'ignoreJSX': 'multi-line', 'nestedBinaryExpressions': false}],
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 0,
    'no-invalid-this': 'error',
    'no-irregular-whitespace': ['error', {'skipRegExps': true}],
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'warn',
    'no-loop-func': 'error',
    'no-magic-numbers': 0,
    'no-misleading-character-class': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-requires': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-assign': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': ['warn', {'max': 1}],
    'no-negated-condition': 'warn',
    'no-nested-ternary': 'warn',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-path-concat': 'error',
    'no-plusplus': ['warn', { 'allowForLoopAfterthoughts': true }],
    'no-process-env': 'error',
    'no-process-exit': 'error',
    'no-proto': 'error',
    'no-prototype-builtins': 'error',
    'no-restricted-globals': ['error', 'event'],
    'no-restricted-imports': 0,
    'no-restricted-modules': 0,
    'no-restricted-properties': 0,
    'no-restricted-syntax': 0,
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-shadow': 'error',
    'no-sync': 'warn',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-ternary': 0,
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': ['error', { 'skipBlankLines': false }],
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-underscore-dangle': ['error', { 'allow': [] }],
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-expressions': 'error',
    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'all', 'caughtErrors': 'all' }],
    'no-use-before-define': ['error', { 'functions': true, 'classes': true }],
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-warning-comments': 'error',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'nonblock-statement-body-position': 0,
    'object-curly-newline': ['error', {'ObjectExpression': {'minProperties': 1}, 'ObjectPattern': 'never'}],
    'object-curly-spacing': ['error', 'never'],
    'object-property-newline': 'error',
    'object-shorthand': ['error', 'always'],
    'one-var': ['error', {'uninitialized': 'always','initialized': 'never'}],
    'one-var-declaration-per-line': 'error',
    'operator-assignment': ['error', 'always'],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'prefer-arrow-callback': ['error', { 'allowNamedFunctions': true }],
    'prefer-const': ['error', { 'ignoreReadBeforeAssign': true }],
    'prefer-destructuring': 0,
    'prefer-named-capture-group': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': ['error', {'allowEmptyReject': true}],
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'consistent'],
    'quotes': ['error', 'single', {'allowTemplateLiterals': true}],
    'quotes': ['error','single'],
    'radix': 'error',
    'require-atomic-updates': 'error',
    'require-await': 'error',
    'require-unicode-regexp': 0,
    'require-yield': 'error',
    'rest-spread-spacing': ['error', 'always'],
    'semi-spacing': ['error', {'before': false, 'after': true}],
    'semi': ['error', 'never'],
    'semi-style': ['error', 'last'],
    'sort-imports': ['warn', {'ignoreCase': false,'ignoreMemberSort': false,'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single']}],
    'sort-keys': ['error', 'asc', {'caseSensitive': true, 'natural': true}],
    'sort-vars': ['warn', { 'ignoreCase': true }],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {'anonymous': 'never', 'named': 'never', 'asyncArrow': 'always'}],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': 0,
    'strict': 0,
    'symbol-description': 'error',
    'switch-colon-spacing': 'error',
    'template-curly-spacing': ['error', 'never'],
    'template-tag-spacing': 'error',
    'unicode-bom': ['warn', 'never'],
    'vars-on-top': 'error',
    'wrap-iife': ['error', 'inside'],
    'wrap-regex': 'warn',
    'yield-star-spacing': ['error', 'after'],
    'yoda': 'error'
  }
};
