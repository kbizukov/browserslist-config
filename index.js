'use strict';

/**
 * Browserslist Shared Config
 * https://github.com/ai/browserslist#shareable-configs
 *
 * Instead of using a `.browserslistrc` or `browserslist`
 * config file, you can reference a shared config file.
 *
 * Use in your package.json as:
 *
 *  "browserslist": [
 *    "extends browserslist-config"
 *  ]
 *
 */

module.exports = [
	"> 1% in RU",
    "Chrome >= 50",
    "Firefox >= 45",
    "Explorer >= 11",
    "Safari >= 9",
    "iOS >= 9",
	"Edge >= 12",
	"current node"
];
