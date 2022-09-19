class School{ 
    private alumnos : Alumno[];
    private matricular : boolean;
    private expulsar : boolean;
    private profesores : Profesor[];
    private contratar: boolean;
    private despedir : boolean;
    //constructor
    constructor(pAlumnos:Alumno[],pMatricular:boolean,pExpulsar:boolean,pProfesor:Profesor[],pContratarProfesor:boolean,pDespedirProfesor:boolean){
        this.alumnos = pAlumnos;
        this.matricular = pMatricular;
        this.expulsar = pExpulsar;
        this.profesores = pProfesor;
        this.contratar = pContratarProfesor; 
        this.despedir = pDespedirProfesor;   
    }
    //metodos
    matricularAlumno(pAlumno:Alumno):void{
        this.alumnos.push(pAlumno);
    }
    expulsarAlumno(pAlumno:Alumno):void{
        for(let i : number = 0; i < this.alumnos.length; i++){
            if(pAlumno === this.alumnos[i]){
                this.alumnos.splice(i,1);
            }
        }
    }
    contratarProfesor(pProfesores:Profesor):void{
        this.profesores.push(pProfesores);
        console.log("contratar");
    }
    
    despedirProfesor(pProfesor:Profesor):void{
        for(let i : number = 0; i < this.profesores.length; i++){
        if(pProfesor === this.profesores[i]){
            this.profesores.splice(i,1);
            console.log("despedir ");
        }
}

class Profesor{
    private apellido : string;
    private presencias : string;
    private alumno: Alumno[];
    
    constructor(pApellido:string,pPrensencias:string,pAlumno:Alumno[]){
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
        
    notaA():string{
        if(this.nota1 > 7){
            return "Aprobado";
        }else{
            return "Desaprobado";
        }
    }
    notaB():string{
        if(this.nota2 > 7){
            return "Aprobado";
        }else{
            return "Desaprobado";
        }
    }
    notaC():string{
        if(this.nota3 > 7){
            return "Aprobado";
        }else{
            return "Desaprobado";
        }
    }    
}

 let alumno1 = new Alumno("Juan Perez",7,7,8);
 let alumno2 = new Alumno("Francisco Ibarra",2,3,5);
 let alumno3 = new Alumno("Pedro Liz",2,6,7);
 let alumno4 = new Alumno("Ana Gomez",4,7,8);
 let alumno5 = new Alumno("Maria Roca",7,8,8);

 let alumTotal : Alumno[] = [alumno1,alumno2,alumno3,alumno4,alumno5];

 let profesor1 = new Profesor("ABAL","P",alumTotal);
 let profesor2 = new Profesor("PIRIZ","P",alumTotal);
 let profesor3 = new Profesor("ANDRADA","A",alumTotal);
 let profesor4 = new Profesor("POMAR","P",alumTotal);
 let profesor5 = new Profesor("PARISIO","P",alumTotal);

 let profesores : Profesor[] = [profesor1,profesor2,profesor3,profesor4,profesor5];
 //let escuela1 = new Escuela(alumno1,true,false,profesor1,true,false);
 //let escuela2 = new Escuela(alumno2,false,true,profesor2,true,false);
 //let escuela3 = new Escuela(alumno3,false,true,profesor3,false,true);
 //let escuela4 = new Escuela(alumno4,false,true,profesor4,true,false);
 //let escuela5 = new Escuela(alumno5,true,false,profesor5,true,false);   
 
 let escuela : School = new School(alumTotal,undefined,undefined,profesores,undefined,undefined);
 console.log(escuela);