import { Application } from "pixi.js";
import Game from "./Game";

(async () => {
	// Create a new application
	const app = new Application();

	// Initialize the application
	await app.init({ background: "#1099bb", resizeTo: window });

	
	// Append the application canvas to the document body
	document.getElementById("pixi-container")!.appendChild(app.canvas);
	
	const game = new Game();
	app.stage.addChild(game);
	game.init();

	const bounds = game.getLocalBounds();
	game.pivot.set(
		bounds.x + bounds.width / 2,
		bounds.y + bounds.height / 2
	);
	const centerGame = () => {
		game.position.set(
			app.screen.width / 2,
			app.screen.height / 2
		);
	};
	centerGame();
	app.renderer.on("resize", centerGame);
})();
