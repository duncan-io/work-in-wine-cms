'use strict';

/**
 * job-poster service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::job-poster.job-poster');
