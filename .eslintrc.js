module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb",
        "airbnb/hooks"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "object-curly-newline": "off",
        "react/jsx-wrap-multilines": "off",
        "max-len": ["error", { "code": 120 }],
        "arrow-parens": "off"
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
}
