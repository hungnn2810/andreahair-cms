'use strict';

/**
 * ups-zone service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ups-zone.ups-zone');
