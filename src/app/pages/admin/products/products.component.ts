import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  isSidePanelVisible : boolean = false;
  productObj : any = {
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
  };
  categoryList : any[] = [];
  productsList : any[] = [];

  constructor(private ProductSrv: ProductService){}

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategory();
  }

  getAllCategory(){
    this.ProductSrv.getCategory().subscribe((res:any) => {
      this.categoryList = res.data;
    });
  }

  getAllProducts(){
    this.ProductSrv.getProducts().subscribe((res:any) => {
      this.productsList = res.data;
    })
  }

  onSave(){
    this.ProductSrv.saveProduct(this.productObj).subscribe((res:any) => {
      debugger;
      if(res.result){
        alert("Product Created");
        this.getAllProducts();
      }
      else alert(res.message);
    })
  }

  onEdit(product: any){
    this.isSidePanelVisible = true;
    this.productObj = product;
  }

  onUpdate(){
    this.ProductSrv.updateProduct(this.productObj).subscribe((res: any) => {
      debugger;
      if(res.result){
        alert("Product Updated");
        this.getAllProducts();
      }else{
        alert(res.message);
      }
    })
  }

  onDelete(product: any){
    const confirmation = confirm("Are you sure you want to delete");
    console.log(confirmation)
    if(confirmation === false) return;
    this.ProductSrv.deleteProduct(product.productId).subscribe((res :any) => {
      debugger;
      if(res.result){
        alert("Product Deleted");
        this.getAllProducts();
      }else{
        alert(res.message);
      }
    })
  }
}
