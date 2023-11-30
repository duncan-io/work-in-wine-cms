'use strict';

/**
 * job-age service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::job-age.job-age');
