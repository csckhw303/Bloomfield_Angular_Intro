import { Component, OnInit } from "@angular/core";
import { ProductService } from './product.service';
import { IProduct } from './Product';
@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  showImage: boolean = false;
   pageTitle: string ='Product List';
   userName: string = "";
   products: IProduct[] = [];
   filteredProducts: IProduct[] = [];
   errorMessage: string ;

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  
  constructor(private productservice: ProductService){}

  userLogin(): void {
    this.userName = this.userName + " not success";
  }
  onNotify(message:string) {
     alert(message);
  }

  ngOnInit() : void {
    this.productservice.getProducts().subscribe(
      data => {
           this.products = data
           this.filteredProducts = data;
      }, error => {
           this.errorMessage = error;
      }
    )
  }

}