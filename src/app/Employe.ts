export class Employe
{
    constructor(private_matricule:number , private_nom:string , private_fonction:string , private_expert:boolean )
    {}
    public get _matricule(): number 
        { return this._matricule; } 
    public set _matricule(mat:number)
        { this._matricule=mat; }

    public get _nom(): string 
        { return this._nom; } 
    public set _nom(ch:string)
        { this._nom =ch; }

    public get _fonction(): string 
        { return this._fonction; } 
    public set _fonction(fnct:string)
        { this._fonction =fnct; }
    
    public get expert(): boolean
        { return this.expert; } 
    public set expert( b:boolean)
        { this.expert =b; }
}