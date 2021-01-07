module.exports = {
    extends: ['airbnb-typescript'],
    rules: {
        "react/prop-types": "off",
        "no-unused-vars": "warn"
    },
    parserOptions: {
        project: './tsconfig.json',
    }
};