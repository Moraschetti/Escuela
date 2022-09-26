class School{ 
    private alumnos : Student[];
    private profesores : Professor[];

    //constructor
    constructor(pAlumnos:Student[],pProfesor:Professor[]){
        this.alumnos = pAlumnos;
        this.profesores = pProfesor;         
    }
    //metodos
     contrataProfesor(pProfesor):void{
        this.profesores.push(pProfesor);
        console.log("Contratar Profesor " + pProfesor);
    }
    despedirProfesor(pProfesor):void{
        for(let i:number=0; i<this.profesores.length; i++){
            if(pProfesor.getApellido() === this.profesores[i].getApellido()){
                this.profesores.splice(i,1);
                console.log("Despedir profesor " + pProfesor.getApellido());
            }else{
                console.log("sin definir");
            }
        }
    }

     matricularAlumno(pAlumno):void{
        this.alumnos.push(pAlumno);
        console.log("matricular Alumno");
    }
     expulsarAlumno(pAlumno):void{
        for(let i:number=0;i<this.alumnos.length;i++){
            if(pAlumno.getNombre() === this.alumnos[i].getNombre()){
                this.alumnos.splice(i,1);
                console.log("expulsar Alumno " + pAlumno);
            }else{
                console.log("sin definir");
            }
        }
    }
  
}

class Professor{
    private apellido : string;
    private presencias : string;
    private alumno: Student[];
    
    constructor(pApellido:string,pPrensencias:string,pAlumno:Student[]){
        this.apellido = pApellido;
        this.presencias = pPrensencias;
        this.alumno = pAlumno;
    }   
    public setApellido(pApellido):void{
        this.apellido = pApellido;
    }
    
    public getApellido():string{
        return this.apellido;
    }
    public setPresencias(pPrensencias):void{
        this.apellido = pPrensencias;
    }
    
    public getPresencias():string{
        return this.presencias;
    }
}

class Student{
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
    public getNombre():string{
        return this.nombre;
    }
    public setNombre(pNombre):void{
        this.nombre = pNombre;
    }
    
     setNotaA(pNota1:number):void{
        this.nota1 =pNota1;
    }
    setNotaB(pNota2:number):void{
        this.nota2 =pNota2;
    }
    setNotaC(pNota3:number):void{
        this.nota3 =pNota3;
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

 let alumno1 = new Student("Juan Perez",7,7,8);
 let alumno2 = new Student("Franco Ibarra",2,3,5);
 let alumno3 = new Student("Pedro Liz",2,6,7);
 let alumno4 = new Student("Ana Gomez",4,7,8);
 let alumno5 = new Student("Maria Roca",7,8,8);

 let alumTotal : Student[] = [alumno1,alumno2,alumno3,alumno4,alumno5];

// console.log(alumno4);
// alumno4.notaA();

 let profesor1 = new Professor("ABAL","P",alumTotal);
 let profesor2 = new Professor("PIRIZ","P",alumTotal);
 let profesor3 = new Professor("ANDRADA","A",alumTotal);
 let profesor4 = new Professor("POMAR","P",alumTotal);
 let profesor5 = new Professor("PARISIO","P",alumTotal);

 let profesores : Professor[] = [profesor1,profesor2,profesor3,profesor4,profesor5];
 
 //console.log(profesor1);
 //profesor3.getApellido();

 let escuela : School = new School(alumTotal,profesores);

 console.table(escuela);
 console.log(escuela);
 escuela.contrataProfesor(profesor1);

