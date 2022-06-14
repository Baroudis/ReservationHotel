import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChambreService } from '../services/chambre.service';
import { DatePipe } from '@angular/common';
import { NgxSliderModule, Options } from '@angular-slider/ngx-slider';




//import { exists } from 'fs';
//import { Pipe } from '@angular/core';
// import { Console } from 'console';





@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css'],
  providers: [DatePipe, Options, NgxSliderModule] 
})
export class ChambreComponent implements OnInit {

categories=["simple","double", "triple","quadruple"]

  item: any;

  reservation={
    id:"",
    idChambre: "",
    img :"",
    title:"",
    description :"",
    prix : 0,
    nom: "",
    dateArrive:"",
    dateDepart:"",
    total: 0,
  };

  letext: any
  chambre: any;
  dateA: any;
  dateD: any;
  // id_chambre: any;
  total:number = 0;
  img_chambre: any;
  title_chambre: any;
  description_chambre: any;
  prix_chambre: any;
  selectedOptionA: any;
  printedOptionA: any;
  selectedOptionD: any;
  printedOptionD: any;
  Diff_temps: any;
  Diff_jour: any;
  vvv: any;
  www: any;
  Nbj: any
  nom: any ='hello ';
  min:any 
  max:any 
  mots:any
  p: number = 1;
  
  
  nomDuClient:any;
  reserv ={}

  constructor(private chambreService: ChambreService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.chambres()
    //this.chambrefiltrer()
    this.date_arrive()
    this.date_depart()
    const id = this.route.snapshot.params['id']

  }


  chambres() {
    this.chambreService.getchambres().subscribe(data => {
      this.chambre = data;
      //console.log(this.chambre?.type)
      //console.log(this.chambre)
      //console.log(Object.values.(this.chambre))
      //this.chambrefiltrer()
     console.log(Object.keys(this.chambre))
     //() => console.log('component', Object.keys(this.chambre))
      //console.log(JSON.stringify(this.chambre.type))
     
    })
  } 

  chambrefiltrer(){
    this.chambreService.getchambresFiltrer(this.min, this.max).subscribe(data => {
      this.chambre = data;
      console.log(this.chambre)
      // this.chambrefiltrer();
  })
}
Toutchambre(lop:any){
  this.chambreService.getchambreType(lop).subscribe(data=> {
    this.chambre = data
    // document.getElementById("catt")?.classList.add("btn-info")
    // document.getElementById("catt")?.classList.remove("btn-success")
    // document.getElementById("triple")?.classList.remove("btn-info")
    // document.getElementById("quadruple")?.classList.remove("btn-info")

    console.log(this.chambre)
  })
}
Changement(color:any){

  //console.log(color)
  switch(color){
    case 'simple' :   document.getElementById("catt")?.classList.add("btn-info")
                      document.getElementById("catt")?.classList.remove("btn-success")
    break
    case 'double' : document.getElementById("catt")?.classList.add("btn-danger")
                    document.getElementById("catt")?.classList.remove("btn-success")
    break 
    case 'triple' : document.getElementById("catt")?.classList.add("btn-warning")
                    document.getElementById("catt")?.classList.remove("btn-success")
    break
    case 'quadruple' : 
    break
  }
  
  
}
minValue: number = 100;
maxValue: number = 400;
options: Options = {
  floor: 0,
  ceil: 500,
  // translate: (value: number, label: LabelType): string => {
  //   switch (label) {
  //     case LabelType.Low:
  //       return '<b>Min price:</b> $' + value;
  //     case LabelType.High:
  //       return '<b>Max price:</b> $' + value;
  //     default:
  //       return '$' + value;
  //   }
  // }
};


// chambreSimple(){
//   this.chambreService.getchambresimple().subscribe(data=> {
//     this.chambre = data
//     document.getElementById("simple")?.classList.add("btn-info")
//     document.getElementById("double")?.classList.remove("btn-info")
//     document.getElementById("triple")?.classList.remove("btn-info")
//     document.getElementById("quadruple")?.classList.remove("btn-info")

//     console.log(this.chambre)
//   })
// }
// chambreDouble(){
//   this.chambreService.getchambreType("double").subscribe(data=> {
//     this.chambre = data
//     document.getElementById("simple")?.classList.remove("btn-info")
//     document.getElementById("double")?.classList.add("btn-info")
//     document.getElementById("triple")?.classList.remove("btn-info")
//     document.getElementById("quadruple")?.classList.remove("btn-info")
//     console.log(this.chambre)
//   })
// }
// chambreTriple(){
//   this.chambreService.getchambreType("triple").subscribe(data=> {
//     this.chambre = data
//     document.getElementById("simple")?.classList.remove("btn-info")
//     document.getElementById("double")?.classList.remove("btn-info")
//     document.getElementById("triple")?.classList.add("btn-info")
//     document.getElementById("quadruple")?.classList.remove("btn-info")
//     console.log(this.chambre)
//   })
// }
// chambreQuadruple(){
//   this.chambreService.getchambreType("quadruple").subscribe(data=> {
//     this.chambre = data
//     document.getElementById("simple")?.classList.remove("btn-info")
//     document.getElementById("double")?.classList.remove("btn-info")
//     document.getElementById("triple")?.classList.remove("btn-info")
//     document.getElementById("quadruple")?.classList.add("btn-info")
//     console.log(this.chambre)
//   })
// }

  date_arrive() {
    this.chambreService.getdateA().subscribe(lesdat => {
      this.dateA =  lesdat;
    })
  }

  date_depart() {
    this.chambreService.getdateD().subscribe(lesdatd => {
      this.dateD = lesdatd;
    })
  }



  ouvrir(c: any) {
    document.getElementById("lemain")?.classList.add("d-none")
    document.getElementById("reserva")?.classList.remove("d-none")

  this.reservation = c,
  console.log(this.reservation.prix)

  }



  reserveA() {
    //this.letext = (<HTMLInputElement>document.getElementById("arriv")).value;
    //(<HTMLInputElement>document.getElementById("arriv")).classList.add("selected")
    this.printedOptionA = this.selectedOptionA;
    console.log(this.selectedOptionA);
  }

  reserveD() {

    //this.letext = (<HTMLInputElement>document.getElementById("arriv")).value;
    //(<HTMLInputElement>document.getElementById("arriv")).classList.add("selected")
    this.printedOptionD = this.selectedOptionD;
    console.log(this.selectedOptionD);

  }

  calcule() {

    this.vvv = new Date(this.printedOptionA)
    this.www = new Date(this.printedOptionD)

    this.Diff_temps = this.www.getTime() - this.vvv.getTime()
    this.Diff_jour = this.Diff_temps / (1000 * 3600 * 24);

    this.Nbj = Math.round(this.Diff_jour)
    console.log(typeof(this.Nbj))
    //alert(this.Nbj)
    this.total = this.reservation.prix * this.Nbj;

    //console.log(this.Nbj)

    alert("Vous allez payer: " + this.total)

    

    // console.log({this.reservation.push(this.total)})

  }

  saveProduit(nomDuClient: any) {

  
    this.reservation.nom = nomDuClient.nom
    this.reservation.dateArrive = this.selectedOptionA
    this.reservation.dateDepart = this.selectedOptionD
    this.reservation.total = this.total
    // this.reservation.idChambre = this.reservation.idchambre
    

     //console.log(this.reservation.id)
     //console.log(this.total)
    

  
    
    let data = this.reservation
    this.chambreService.saveProduit(data).subscribe(data => {
      console.log(this.nom)
      console.log(this.reservation)
    })


    // filtrer(){
      
    //   this.reservation = this.reservation.filter()

    // }
    

  }









}
