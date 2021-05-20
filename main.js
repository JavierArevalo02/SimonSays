const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const red1 = document.getElementById('red-1')
const red2 = document.getElementById('red-2')
const darkblue1 = document.getElementById('darkblue-1')
const darkblue2 = document.getElementById('darkblue-2')
const yellow1 = document.getElementById('yellow-1')
const yellow2 = document.getElementById('yellow-2')
const brown1 = document.getElementById('brown-1')
const brown2 = document.getElementById('brown-2')
const btnEmpezar = document.getElementById('btnEmpezar')
const UltimoNivel = 10
var contlevel = 0

class Juego {
        
    constructor() {
        this.inicializar = this.inicializar.bind(this)
        this.inicializar()
        this.generasecuencia()
        this.aumentanivel()
        
    }

    inicializar() {
        this.elige = this.elige.bind(this)
        this.aumentanivel = this.aumentanivel.bind(this)
        this.toggleBtnEmpezar()
        this.level = 1
        this.colores = {celeste,violeta,naranja,verde,red1,darkblue1,yellow1,brown1,brown2,yellow2,darkblue2,red2}
    }
    toggleBtnEmpezar(){
        if(btnEmpezar.classList.contains('hide')){
            btnEmpezar.classList.remove('hide')
        }else{
            btnEmpezar.classList.add('hide')
        }
    }
        
    generasecuencia(){
        this.secuencia= new Array(UltimoNivel).fill(0).map(n=> Math.floor( Math.random()*12))
        //console.log(this.secuencia)
    }
        
    aumentanivel(){
        this.subnivel = 0
        this.iluminasecuencia()
        this.eventclick()
    }

    eventclick(){
        this.colores.celeste.addEventListener('click', this.elige)
        this.colores.verde.addEventListener('click', this.elige)
        this.colores.violeta.addEventListener('click', this.elige)
        this.colores.naranja.addEventListener('click', this.elige)
        this.colores.red1.addEventListener('click', this.elige)
        this.colores.red2.addEventListener('click', this.elige)
        this.colores.darkblue1.addEventListener('click', this.elige)
        this.colores.darkblue2.addEventListener('click', this.elige)
        this.colores.yellow1.addEventListener('click', this.elige)
        this.colores.yellow2.addEventListener('click', this.elige)
        this.colores.brown1.addEventListener('click', this.elige)
        this.colores.brown2.addEventListener('click', this.elige)
        }

    eliminarEventClick(){
        this.colores.celeste.removeEventListener('click', this.elige)
        this.colores.verde.removeEventListener('click', this.elige)
        this.colores.violeta.removeEventListener('click', this.elige)
        this.colores.naranja.removeEventListener('click', this.elige)
        this.colores.red1.removeEventListener('click', this.elige)
        this.colores.red2.removeEventListener('click', this.elige)
        this.colores.darkblue1.removeEventListener('click', this.elige)
        this.colores.darkblue2.removeEventListener('click', this.elige)
        this.colores.yellow1.removeEventListener('click', this.elige)
        this.colores.yellow2.removeEventListener('click', this.elige)
        this.colores.brown1.removeEventListener('click', this.elige)
        this.colores.brown2.removeEventListener('click', this.elige)
    }

    elige(ev){
        const namecolor = ev.target.dataset.color
        const numbercolor = this.colortonumber(namecolor)
        this.iluminacolor(namecolor)
        if(numbercolor === this.secuencia[this.subnivel]){
            this.subnivel++
            if (this.subnivel === this.level){
                this.level++
                contlevel +=1
                //console.log(contlevel)
                this.eliminarEventClick()
                if(this.level === (UltimoNivel+1)){
                    this.ganajuego()
                } else {
                    setTimeout(this.aumentanivel,1000)
                }

            }
        }else{
            this.perdiojuego()
        }
    }
    perdiojuego(){
        const message = 'Tu puntaje es: ' + contlevel
        swal('Perdiste',message,'error')
        .then(()=>{
            this.eliminarEventClick()
            contlevel = 0
            this.inicializar()
        })
        }
    ganajuego(){ 
        const message = 'Tu puntaje es: ' + contlevel
        swal('Ganaste',message,'success')
        .then(this.inicializar)
    }
    colortonumber(color){
        switch(color){
            case 'celeste':
              return 0
            case 'violeta':
              return 1
            case 'naranja':
              return 2
            case 'verde':
              return 3
            case 'red1':
              return 4
            case 'darkblue1':
              return 5
            case 'yellow1':
              return 6
            case 'brown1':
              return 7
              case 'brown2':
              return 8
            case 'yellow2':
              return 9
            case 'darkblue2':
              return 10
            case 'red2':
              return 11
        }
    }

    iluminasecuencia(){
        for (let i = 0; i < this.level;i++){
            const color = this.numbertocolor(this.secuencia[i])
            setTimeout(()=> this.iluminacolor(color), 1000 * i)
        }
    }
    iluminacolor(color){
        //console.log(color)
        this.colores[color].classList.add('light')
        setTimeout(()=>this.apagarcolor(color),350)
    }
    apagarcolor(color){
        this.colores[color].classList.remove('light')
    }
    numbertocolor(number){
        switch(number){
            case 0:
              return 'celeste'
            case 1:
              return 'violeta'
            case 2:
              return 'naranja'
            case 3:
              return 'verde'
            case 4:
              return 'red1'
            case 5:
              return 'darkblue1'
            case 6:
              return 'yellow1'
            case 7:
              return 'brown1'
            case 8:
              return 'brown2'
            case 9:
              return 'yellow2'
            case 10:
              return 'darkblue2'
            case 11:
              return 'red2'
        }
    }
        
    }

    function empezarJuego() {
        window.juego = new Juego()
    }

    function GetName() {
        var name = document.getElementById("name").value;
        console.log(name)
    }