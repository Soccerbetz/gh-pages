class ImageDecodingPlugin {
	constructor (API, name, config) {
		this.API = API;
		this.name = name;
		this.config = config;
	}

	addModifiers () {
		this.API.addModifier('postText', this.addDecodingAttribute, 1, this);
	}

	addDecodingAttribute (rendererInstance, text) {
		text = text.replace(/\<img /gmi, '<img decoding="' + this.config.decodingMode + '" ');
		return text;
	}
}

module.exports = ImageDecodingPlugin;