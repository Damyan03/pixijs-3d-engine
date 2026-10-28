import { Container, Graphics } from "pixi.js";
import GameMap from "./GameMap";

export default class Player extends Container{
    private static instance: Player;

    private playerX: number;
    private playerY: number;

    private constructor(){
        super();
        this.playerX = 4;
        this.playerY = 4;

        const size = 50;
        const offset = (GameMap.cellSize - size) / 2;

        const player = new Graphics()
            .rect(offset, offset, size, size)
            .stroke({color: "black"});

        this.addChild(player);
        this.updatePosition();
    }

    public static getInstance(): Player{
        if(!Player.instance) Player.instance = new Player();
        return Player.instance;
    }

    private updatePosition(): void{
        this.position.set(
            this.playerX * GameMap.cellSize,
            this.playerY * GameMap.cellSize
        );
    }

    public getPlayerX(): number{
        return this.playerX
    }

    public setPlayerX(x: number): void{
        this.playerX = x;
        this.updatePosition();
    }

    public getPlayerY(): number{
        return this.playerY;
    }

    public setplayerY(y: number): void{
        this.playerY = y;
        this.updatePosition();
    }
}