class Escuela{ 
    private alumnos : Alumno;
    private matricular : boolean;
    private expulsar : boolean;
    private profesor : Profesor;
    private contratar: boolean;
    private despedir : boolean;
    //constructor
    constructor(pAlumnos:Alumno,pMatricular:boolean,pExpulsar:boolean,pProfesor:Profesor,pContratarProfesor:boolean,pDespedirProfesor:boolean){
        this.alumnos = pAlumnos;
        this.matricular = pMatricular;
        this.expulsar = pExpulsar;
        this.profesor = pProfesor;
        this.contratar = pContratarProfesor; 
        this.despedir = pDespedirProfesor;   
    }
    //metodos
    matricularAlumno():void{
        if(this.matricular===true){
            this.matricular=false;
        }else{
            this.matricular=true;
        }
    }
    contratarProfesor():void{
        if(this.contratar===true){
            this.contratar=false;
        }else{
            this.contratar=true;
        }
    }
    expulsarAlumno():void{
        if(this.expulsar===true){
            this.expulsar=false;
        }else{
            this.expulsar=true;
        }
    }
    despedirProfesor():void{
        if(this.despedir===true){
            this.despedir=false;
        }else{
            this.despedir=true;
        }
    }
}

class Profesor{
    private apellido : string;
    private presencias : string;
    private alumno: Alumno;
    
    constructor(pApellido:string,pPrensencias:string,pAlumno:Alumno){
        this.apellido = pApellido;
        this.presencias = pPrensencias;
        this.alumno = pAlumno;
    }   
}

class Alumno{
    private nombre : string;
    private nota1 : number;
    private nota2 : number;
    private nota3 : number;
    
    constructor(pNombre:string,pNota1:number,pNota2:number,pNota3:number){
        this.nombre = pNombre;
        this.nota1 = pNota1;
        this.nota2 = pNota2;
        this.nota3 = pNota3;
    }
}
 let alumno1 = new Alumno("Juan Perez",7,7,8);
 let alumno2 = new Alumno("Francisco Ibarra",2,3,5);
 let alumno3 = new Alumno("Pedro Liz",2,6,7);
 let alumno4 = new Alumno("Ana Gomez",4,7,8);
 let alumno5 = new Alumno("Maria Roca",7,8,8);

 let profesor1 = new Profesor("ABAL","P",alumno1);
 let profesor2 = new Profesor("PIRIZ","P",alumno2);
 let profesor3 = new Profesor("ANDRADA","A",alumno3);
 let profesor4 = new Profesor("POMAR","P",alumno4);
 let profesor5 = new Profesor("PARISIO","P",alumno5);

 let escuela1 = new Escuela(alumno1,true,false,profesor1,true,false);
 let escuela2 = new Escuela(alumno2,false,true,profesor2,true,false);
 let escuela3 = new Escuela(alumno3,false,true,profesor3,false,true);
 let escuela4 = new Escuela(alumno4,false,true,profesor4,true,false);
 let escuela5 = new Escuela(alumno5,true,false,profesor5,true,false);   

 console.log(escuela1);
 //console.log(escuela3);
 //console.log(escuela2);
 

 