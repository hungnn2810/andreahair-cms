'use strict';

/**
 * dhl-zone service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dhl-zone.dhl-zone');
