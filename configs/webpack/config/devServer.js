import isWindows from 'is-windows';
import apiMocker from 'connect-api-mocker';

const defaultPort = 3022;

const devServerHost = isWindows() ? 'localhost' : '0.0.0.0';

export const devServerUrl = `http://${devServerHost}:${defaultPort}/`;

const USE_MOCKS = process.env.SERVER_URL === undefined;

export const devServerConfig = {
    publicPath: '/',
    port: defaultPort,
    historyApiFallback: true,
    headers: {'Access-Control-Allow-Origin': '*'},
    hot: true,
    overlay: false,
    host: devServerHost,
	contentBase: ["./dist"],
	...(USE_MOCKS
		? {
			before: (app) => {
				app.use(apiMocker('/api', 'src/mocks/api'));
			},
		}
		: {
			proxy: {
				'/api/**': {
					secure: false,
					target: process.env.SERVER_URL,
					changeOrigin: true,
					ws: true
				},
			},
		}),
};
