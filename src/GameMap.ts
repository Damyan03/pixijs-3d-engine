import { Container, Graphics } from "pixi.js";

export default class GameMap extends Container{
    private static instance: GameMap;
    public static readonly cellSize = 100;
    public static readonly rows = 9;
    public static readonly cols = 9;
    private mapGrid: number[][];

    private constructor(){
        super();
        this.mapGrid = Array.from({ length: GameMap.rows }, () => Array<number>(GameMap.cols).fill(0));
        this.drawMap();
    }

    public static getInstance(): GameMap{
        if(!GameMap.instance) GameMap.instance = new GameMap();
        return GameMap.instance;
    }

    private drawMap(): void{
        const map = new Graphics();

        const cellSize = GameMap.cellSize;

        for(let row = 0; row < this.mapGrid.length; row++){
            for(let col = 0; col < this.mapGrid[row].length; col++){
                map.rect(col * cellSize, row * cellSize, cellSize, cellSize);
            }
        }

        map.stroke({color: "black"});

        this.addChild(map);
    }
}
