function randomColorGenerator() {
	var hue = Math.floor(Math.random() * 30) * 12;

    return $.Color({
        hue: hue,
        saturation: 0.9,
        lightness: 0.6,
        alpha: 1
    }).toHexString();
}
