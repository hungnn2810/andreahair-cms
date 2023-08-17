'use strict';

/**
 * product-standard service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-standard.product-standard');
