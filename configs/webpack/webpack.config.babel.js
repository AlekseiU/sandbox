import merge from 'webpack-merge';

import baseConfig from './base.js';
import devConfig from './dev.js';
import prodConfig from './prod.js';
import {isProd} from './utils/env.js';

export default () =>
    isProd ? merge(baseConfig, prodConfig) : merge(baseConfig, devConfig);
