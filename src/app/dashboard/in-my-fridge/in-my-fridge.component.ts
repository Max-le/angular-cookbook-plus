import { Component, OnInit } from '@angular/core';
import {NbSearchService, NbToastrService, NbGlobalPosition, NbSidebarService} from '@nebular/theme'
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

     listIsVisible: boolean = false;

     constructor(private searchService: NbSearchService,private toastrService: NbToastrService,
      private sidebarService: NbSidebarService) {
  
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

    //Listening to the state of the sidebar
    this.sidebarService.onCollapse().subscribe( (data:any) => {
      this.listIsVisible = false; 
      console.log(this.listIsVisible);
    } )
    this.sidebarService.onExpand().subscribe( (data:any) => {
      this.listIsVisible = true; 
      console.log(this.listIsVisible);
    } )
  
  }
  ngOnInit(): void {
        //Inititalizes the empty array
        this.resultIngredients = [];
        this.selectedIngredients = [];
  
  }


startSearch(){
  this.searchService.activateSearch('');
}

addToList(ingredient: Ingredient){
  this.selectedIngredients.push(ingredient);
  this.showToast(ingredient.name.charAt(0).toUpperCase() + ingredient.name.slice(1)+" added to your list.", 'bottom-right', 'success')

}
showToast(msg, position, status){
  this.toastrService.show(msg, '👩‍🍳',
   {position, status, preventDuplicates: false});
}


remove(ingredient: Ingredient){
  for ( let i = 0; this.selectedIngredients.length; i++){
    if (this.selectedIngredients[i].name == ingredient.name){
      this.selectedIngredients.splice(i, 1);
    }
  }
}

showList(){
  this.sidebarService.expand();
}
hideList(){
  this.sidebarService.collapse();
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


