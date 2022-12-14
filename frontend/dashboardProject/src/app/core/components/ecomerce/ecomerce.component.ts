import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-ecomerce',
  templateUrl: './ecomerce.component.html',
  styleUrls: ['./ecomerce.component.css']
})
export class EcomerceComponent implements OnInit {
  product!: Product[]

  constructor( private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) {
     
     }
     
  ngOnInit(): void {
    this.getProduct()
  }
  getProduct() {
    
    this.productService.getProducts().subscribe(response=>{
      console.log(response)
      this.product=response
    })  

}

}
