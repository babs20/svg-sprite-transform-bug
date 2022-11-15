const fs = require("fs");
const SVGSpriter = require("svg-sprite");

const config = {
	log: "debug",
	shape: {
		transform: [
			"svgo",
			{
				custom: (shape, sprite, callback) => {
					console.log("2nd Transformation");
					const svgEl = shape.dom.getElementsByTagName("svg");
					const paths = shape.dom.getElementsByTagName("path");

					for (let i = 0; i < svgEl.length; i++) {
						svgEl[i].removeAttribute("fill");
					}

					for (let i = 0; i < paths.length; i++) {
						paths[i].setAttribute("fill", "");
					}

					callback(null);
				},
			},
		],
	},
};

const spriter = new SVGSpriter(config);

spriter.add(
	"assets/svg-1.svg",
	null,
	fs.readFileSync("assets/svg-1.svg", "utf-8")
);

spriter.add(
	"assets/svg-2.svg",
	null,
	fs.readFileSync("assets/svg-2.svg", "utf-8")
);
