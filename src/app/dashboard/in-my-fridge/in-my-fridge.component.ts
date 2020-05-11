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

    //Declare a list of ingredients using interface as a pattern
    selectedIngredients: Ingredient[]

    //Creates an enum
     size = Object.freeze({"small":"100x100", "medium":"250x250", "large":"500x500"});
  
     baseImageUrl = `https://spoonacular.com/cdn/ingredients_${this.size.medium}/`;
    
     valueSearch: string = '';  


  ngOnInit(): void {
        //Inititalizes the empty array
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
      .then(ingredients => {this.selectedIngredients = ingredients});
    }
  })

}

startSearch(){
  this.searchService.activateSearch('');
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

private  getImageOfIngredientUrl = imageName => {
  //https://spoonacular.com/food-api/docs#Show-Images

  //Creates an enum
  const size = Object.freeze(
    {"small":"100x100", "medium":"250x250", "large":"500x500"});

  return `https://spoonacular.com/cdn/ingredients_${size.small}/`+imageName;
  


}

}


