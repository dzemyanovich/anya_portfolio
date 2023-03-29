const { defineConfig } = require('cypress');
const merge = require('deepmerge');

const config = require('./cypress.shared')

module.exports = defineConfig(merge(config, {
  env: {
    domain: 'http://localhost:8080',
  },
}));
