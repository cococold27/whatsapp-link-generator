const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","icons/call-outline.svg","icons/checkmark-done-sharp.svg","icons/chevron-back-outline.svg","icons/videocam-outline.svg","images/background-image.jpg","images/default-profile-picture.png","images/phone-frame.png","images/whatsapp-background-without-color.png","images/whatsapp-background.jpg","images/whatsapp-site-icon.png","js/qrcode.js"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg",".js":"application/javascript"},
	_: {
		entry: {"file":"_app/immutable/start-58bfdbe5.js","imports":["_app/immutable/start-58bfdbe5.js","_app/immutable/chunks/index-2741cab5.js","_app/immutable/chunks/singletons-a91c7c2a.js"],"stylesheets":[]},
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
