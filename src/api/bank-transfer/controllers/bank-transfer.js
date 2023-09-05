'use strict';

/**
 * bank-transfer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::bank-transfer.bank-transfer');
