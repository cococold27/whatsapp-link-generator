const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-7d1d55bc.js","imports":["_app/immutable/start-7d1d55bc.js","_app/immutable/chunks/index-2b05990c.js","_app/immutable/chunks/singletons-d4cbfca3.js"],"stylesheets":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js'))
		],
		routes: [
			{
					id: "",
					pattern: /^\/$/,
					names: [],
					types: [],
					page: {"layouts":[0],"errors":[1],"leaf":2},
					endpoint: null
				}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
