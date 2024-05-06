import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/products/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{

  isSidePanelVisible: boolean = false;

  prodObject: any = {
    "productId": 0,
    "productSku": "",
    "productName": "",
    "productPrice": 0,
    "productShortName": "",
    "productDescription": "",
    "createdDate": new Date(),
    "deliveryTimeSpan": "",
    "categoryId": 0,
    "productImageUrl": ""
  }

  categoryList: any [] = [];
  productsList: any [] = [];

  openSidePanel(){
    this.isSidePanelVisible = true;
  }

  closeSidePanel(){
    this.isSidePanelVisible = false;
  }

  constructor(private productSev: ProductService){
    
  }

  ngOnInit(): void {
    this.getProducts();
    this.getAllCatogory();
  }
  
  getAllCatogory(){
    this.productSev.getCategory().subscribe((res:any)=>{
      this.categoryList = res.data;
    })
  }

  getProducts(){
    this.productSev.getProducts().subscribe((res:any)=>{
      this.productsList = res.data;
    })
  }

  onSave(){
    this.productSev.saveProduct(this.prodObject).subscribe((res:any)=>{

      if(res.result){
        alert("Product Created");
        this.getProducts();
      }
      else{
        alert(res.message)
      }
    })
  }

}
