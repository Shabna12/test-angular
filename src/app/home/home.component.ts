import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  searchKey:string= "";

  allRecipes:any = []

  p: number = 1;
  collection: any[] = this.allRecipes; 
 
  
  constructor(private api:ApiService) { }
    
  // recipe:any

  ngOnInit(): void {
    this.getRecipes()
  }
     

  getRecipes(){
    this.api.getRecipesAPI().subscribe((result:any) => {
      this.allRecipes = result
      console.log(this.allRecipes);
      
    })
  }
}
