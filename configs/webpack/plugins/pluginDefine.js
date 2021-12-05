import dotenv from "dotenv";
import {DefinePlugin} from 'webpack';

/**
 * @example
 * const config = {
 *     isProd: true
 * }
 */
import {isDev, isDevServer, isProd, mode} from '../utils/env';

const config = {
	'process.env':  JSON.stringify({
		...dotenv.config().parsed,
		NODE_ENV: JSON.stringify(mode)
	}),
    IS_PROD: isProd,
    IS_DEV: isDev,
    IS_DEV_SERVER: isDevServer,
};

export const definePlugin = new DefinePlugin(config);
