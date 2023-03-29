const { defineConfig } = require('cypress');
const merge = require('deepmerge');

const config = require('./cypress.shared')

module.exports = defineConfig(merge(config, {
  env: {
    domain: 'http://dev4.annapivunova.me.s3-website.eu-central-1.amazonaws.com',
  },
}));
