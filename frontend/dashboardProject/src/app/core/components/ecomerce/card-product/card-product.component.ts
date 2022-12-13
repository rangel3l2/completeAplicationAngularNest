import { Component, Input } from '@angular/core';
import { Product } from 'src/app/core/models/Product';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent {
  @Input()productSon? : Product[] 

}
