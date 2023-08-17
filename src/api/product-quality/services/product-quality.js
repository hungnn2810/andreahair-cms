'use strict';

/**
 * product-quality service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-quality.product-quality');
