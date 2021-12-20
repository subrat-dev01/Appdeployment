import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  

  constructor(private productservice:ProductService){}
products = [];
product_value = [];
selectedButton = {};

 
  ngOnInit(): void {
     this.productservice.GetPhotosdata().subscribe(Response=> {
        this.products = Response;
        console.log(Response);
     }) 
  }
addFunction(item, i:number){
 // this.buttonchange = 'Remove';
 debugger;


 if(this.selectedButton[item.id] === true){
 this.selectedButton[item.id]= !this.selectedButton[item.id];
 //this.product_value.splice(item.id,0);
 //this.product_value.filter(item.id != item.id)
// debugger;
this.product_value.splice(i, 1);
 }else{
   
  this.selectedButton[item.id]= !this.selectedButton[item.id];
  this.product_value.push({ id:item.id,title:item.title, url:item.url, thumbnailUrl:item.thumbnailUrl });


 }

}

}
