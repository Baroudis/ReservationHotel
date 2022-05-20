import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChambreService } from '../services/chambre.service';
import { DatePipe } from '@angular/common';
//import { Pipe } from '@angular/core';
// import { Console } from 'console';





@Component({
  selector: 'app-chambre',
  templateUrl: './chambre.component.html',
  styleUrls: ['./chambre.component.css'],
  providers: [DatePipe]
})
export class ChambreComponent implements OnInit {

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
      console.log(this.chambre)
      //this.chambrefiltrer()
    })
  }

  chambrefiltrer(){
    this.chambreService.getchambresFiltrer(this.min, this.max).subscribe(data => {
      this.chambre = data;
      console.log(this.chambre)
      // this.chambrefiltrer();
  })
}

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
  console.log(this.reservation)

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
    //console.log(nomDuClient)
    //let data = nomDuClient.value
    // this.reservation.nom = nomDuClient
  
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
