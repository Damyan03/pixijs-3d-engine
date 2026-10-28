import { Container, Graphics } from "pixi.js";

export default class GameMap {

    private static instance: GameMap;

    private playerX: Number;;
    private playerY: Number;
    private mapGrid: Number[][];


    private constructor(){
        this.playerX = 4;
        this.playerY = 4;
        this.mapGrid = Array.from({ length: 9 }, () => Array<Number>(9).fill(0));
    }

    public static getInstance(): GameMap{
        if(!GameMap.instance) GameMap.instance = new GameMap();
        return GameMap.instance;
    }

    public drawMap(canvas: Container): void{
        const map = new Graphics();
        map.position.set()

        console.log(this.mapGrid);

        const cellSize = 100;

        for(let row = 0; row < this.mapGrid.length; row++){
            for(let col = 0; col < this.mapGrid[row].length; col++){
                map.rect(col * cellSize, row * cellSize, cellSize, cellSize)
                .stroke({color: "black"})
            }
        }

        canvas.addChild(map);
    }
    
    public getPlayerX(): Number{
        return this.playerX
    }

    public setPlayerX(x: Number): void{
        this.playerX = x;
    }

    public getPlayerY(): Number{
        return this.playerY;
    }
    
    public setplayerY(y: Number): void{
        this.playerY = y;
    }
    
}
