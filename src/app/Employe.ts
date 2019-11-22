export class Employe
{
    constructor(private _matricule:number , private _nom:string , private _fonction:string , private _expert:boolean )
    {}
    public get matricule(): number 
        { return this._matricule; } 
    public set matricule(mat:number)
        { this.matricule=mat; }

    public get nom(): string 
        { return this._nom; } 
    public set nom(ch:string)
        { this._nom =ch; }

    public get fonction(): string 
        { return this._fonction; } 
    public set fonction(fnct:string)
        { this._fonction =fnct; }
    
    public get expert(): boolean
        { return this._expert; } 
    public set expert( b:boolean)
        { this._expert =b; }
}