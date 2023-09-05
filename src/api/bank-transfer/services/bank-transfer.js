'use strict';

/**
 * bank-transfer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bank-transfer.bank-transfer');
