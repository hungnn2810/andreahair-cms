'use strict';

/**
 * dhl-price service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dhl-price.dhl-price');
