import { Container } from "pixi.js";
import GameMap from "./GameMap";

export default class Game extends Container {

    private map = GameMap.getInstance();

    public init(){
        this.map.drawMap(this);
    }
}