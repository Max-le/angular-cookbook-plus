import { Component, OnInit } from '@angular/core';
import {NbSearchService} from '@nebular/theme'
import {Ingredient} from 'src/app/models/Ingredient'
import {SPOONACULAR_API_KEY} from 'src/environments/ApiKey'
@Component({
  selector: 'app-in-my-fridge',
  templateUrl: './in-my-fridge.component.html',
  styleUrls: ['./in-my-fridge.component.scss']
})
export class InMyFridgeComponent implements OnInit {

    //results of search
    resultIngredients: Ingredient[]

    //items put in list by user
    selectedIngredients: Ingredient[]

    //Creates an enum
     size = Object.freeze({"small":"100x100", "medium":"250x250", "large":"500x500"});
      
     valueSearch: string = '';  


  ngOnInit(): void {
        //Inititalizes the empty array
        this.resultIngredients = [];
        this.selectedIngredients = [];
  }
  constructor(private searchService: NbSearchService) {

  //Listening typing on NbSearch
  this.searchService.onSearchInput().subscribe((data: any) => {

    this.valueSearch = data.term;
    

    /*Start querying when at least 2 characters typed to avoid
    sending too many requests to the API*/
    if (this.valueSearch.length > 2) {
      fetch(this.formSpoonacularURL(this.valueSearch))
      .then((response => response.json()))
      .then(ingredients => {this.resultIngredients = ingredients});
    }
  })

}

startSearch(){
  this.searchService.activateSearch('');
}

addToList(ingredient: Ingredient){
  console.table(ingredient);
  this.selectedIngredients.push(ingredient);
}


private formSpoonacularURL(query){
    //Forming the query URL
    let numberResults = 6
    const url = 'https://api.spoonacular.com/food/ingredients/autocomplete?'+ 
                'apiKey='+ SPOONACULAR_API_KEY + 
                '&query='+ query +
                '&number=' + numberResults +
                '&metaInformation=' + 'false'
    return url;
}

//Image size must be "small", "medium" or "large"
getImageOfIngredientUrl = (name,size) => {
  //https://spoonacular.com/food-api/docs#Show-Images

  return `https://spoonacular.com/cdn/ingredients_${size}/`+name;
  
}

}


