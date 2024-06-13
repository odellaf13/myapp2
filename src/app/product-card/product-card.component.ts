import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  formState = false
  
  buyProduct(){
    console.log("Comprar un producto")
    this.formState = true
  }

}
