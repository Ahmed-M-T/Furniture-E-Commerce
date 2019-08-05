import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './featured/products/products.component';
import { ProductComponent } from './featured/product/product.component';
import { ProductModelComponent } from './featured/product-model/product-model.component';
import { PartnersComponent } from './partners/partners.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { SkillsComponent } from './skills/skills.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsShowComponent } from './products-show/products-show.component';
import { Banner2Component } from './banner2/banner2.component';
import { BannerComponent } from './banner/banner.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { StoreComponent } from './store/store.component';
import { ServiceComponent } from './service/service.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomefillerComponent } from './homefiller/homefiller.component';
import { CatgoriesColumnComponent } from './catgories-column/catgories-column.component';
import { ProductImageComponent } from './featured/product-image/product-image.component';
import { ProductInfoComponent } from './featured/product-info/product-info.component';
import { ProductJumbotronComponent } from './featured/product-jumbotron/product-jumbotron.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ProductsComponent,
    ProductComponent,
    ProductModelComponent,
    PartnersComponent,
    NewsletterComponent,
    SkillsComponent,
    FooterComponent,
    HomeComponent,
    ProductsShowComponent,
    Banner2Component,
    BannerComponent,
    SingleproductComponent,
    StoreComponent,
    ServiceComponent,
    CategoriesComponent,
    HomefillerComponent,
    CatgoriesColumnComponent,
    ProductImageComponent,
    ProductInfoComponent,
    ProductJumbotronComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
