import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-images',
  templateUrl: './product-images.component.html',
  styleUrl: './product-images.component.css',
  standalone: true
})
export class ProductImagesComponent implements OnInit {
  @Input({ required: true }) images!: String[];
  activeImage: String = '';

  ngOnInit(): void{
    this.activeImage = this.images[0] || '';
  }

  onChangeImage(src: String){
    this.activeImage = src;
  }
}
