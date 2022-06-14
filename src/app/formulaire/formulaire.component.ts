import { Component, OnInit } from '@angular/core';
//import { Article } from 'src/app/_models/Article';
//import { ArticleService } from 'src/app/_services/article.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

//   public message: boolean = false;
//   public articleForm!: FormGroup;

  constructor() { }
  ngOnInit(): void {}

//     this.articleForm = new FormGroup({
//       title: new FormControl(null, [
//         Validators.required,
//         Validators.minLength(4),
//       ]),
//       price: new FormControl(null, Validators.required),
//       description: new FormControl(null, [
//         Validators.required,
//         Validators.minLength(4),
//       ]),
//       imageURL: new FormControl(null, Validators.required)
//     })
//   }

//   public addArticle() {
//     console.log("in AddArticle function", this.articleForm.value)

//     // let newArticle: Article = {
//     //   "id": Date.now(),
//     //   "title": form.value.title,
//     //   "price": form.value.price,
//     //   "description": form.value.description,
//     //   "imageURL": form.value.image_url
//     // }

//     this.as.createArticle(this.articleForm.value).subscribe(data => {
//       console.log("Article added", data)
//     })
//     this.message=true
//     this.articleForm.reset()
//   }

//   get imageURL() { return this.articleForm.get('imageURL'); }

//   get price() { return this.articleForm.get('price'); }

//   get title() { return this.articleForm.get('title'); }

//   get description() { return this.articleForm.get('description'); }



// }

}