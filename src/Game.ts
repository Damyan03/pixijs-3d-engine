import { Container } from "pixi.js";
import GameMap from "./GameMap";
import Player from "./Player";

export default class Game extends Container {

    private map = GameMap.getInstance();
    private player = Player.getInstance();

    public init(){
        this.addChild(this.map);
        this.addChild(this.player);
    }
}