import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { ProductImagesComponent } from './product-images/product-images.component';
import { ProductsService } from '../../services/products.service';
import { LoaderComponent } from '../../shared/components/loader/loader.component';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductItem } from '../../modal/products.modal';
import { defaultProductDetail } from '../../shared/constants';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ProductImagesComponent, LoaderComponent, FontAwesomeModule, DecimalPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  destroyRef = inject(DestroyRef);
  showLoader: boolean;
  productDetails: ProductItem;
  isRequestCompleted: boolean;
  starIcon = faStar

  constructor(private productService: ProductsService) {
    this.showLoader = true;
    this.productDetails = defaultProductDetail;
    this.isRequestCompleted = false;
  }

  ngOnInit(): void {
    const subscription = this.activatedRoute.paramMap.subscribe({
      next: (params: ParamMap) => {
        const productId: number = Number(params.get('productId'))!;
        this.productService.getSingleProduct(productId).subscribe({
          next: (response: ProductItem) => {
            this.productDetails = response;
            this.isRequestCompleted = true;
            this.showLoader = false;
          },
          error: (error: any) => {
            this.isRequestCompleted = true;
            this.showLoader = false;
            alert('Something went wrong, Please try again after sometime.');
          },
          complete: () => {
            this.isRequestCompleted = true;
          },
        });
      },
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }

  getRatingClass(): string{
    if(this.productDetails.rating < 2){
      return 'red';
    } else if(this.productDetails.rating < 3){
      return 'yellow';
    } else if (this.productDetails.rating < 4){
      return 'orange';
    }

    return 'green';
  }
}
