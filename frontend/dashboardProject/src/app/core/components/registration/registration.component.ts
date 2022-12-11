import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from '../../models/Category';
import { Product } from '../../models/Product';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{ 
  hide= true;
  product!: Product;
  submitted=false;
  productForm!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private _router: Router

    ) {}

  ngOnInit(): void {

  
  
    this.product = {
      name: '',
      description: '',
      category: {
        id: '',
        name: ''
      },
      image: '',      
      price: 0,
      quantity: 0,
      weight: 0,
      unity: '',
      active: true
    };

    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl(''),
      category: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),     
      quantity: new FormControl('',[Validators.required]),
      weight: new FormControl('', [Validators.required]),
      unity: new FormControl('', [Validators.required])
    
    });


  }
   imageSrc: string = '';

  handleInputChange(e : any) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e : any) {
    let reader = e.target;
    this.imageSrc = reader.result;
    console.log(this.imageSrc)
  }

//enviar formulario atras do click methodo
onSubmit(form: FormGroup) {
  if(form.valid){
    // console.log('Valid?', form.valid); // true or false

    this.mapFormValuesToProductModel();



//mostra no terminal mudança
    console.log(this.product);

    this.productService.save(this.product).subscribe({
      next: (product) => {
        this._router.navigate(['Ecomerce']);
      
      },
      error: (err: any) => console.log(err)
    }
  );


  } else {
    console.log('preencha os campos obrigatórios')

  }
}
mapFormValuesToProductModel() {
  this.product.name = this.productForm.value.name;  
  this.product.description = this.productForm.value.description;
  this.product.category = this.productForm.value.category;
  this.product.image = this.productForm.value.image;
  this.product.price = this.productForm.value.price;
  this.product.quantity = this.productForm.value.quantity;
  this.product.weight = this.productForm.value.weight;
  this.product.unity = this.productForm.value.unity;

}

}
