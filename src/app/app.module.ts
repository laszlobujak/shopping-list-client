import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatCheckboxModule,
  MatSidenavModule
} from '@angular/material';
import { RoutingModule } from './routing/routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';
import { ShoppinglistListComponent } from './shoppinglist-list/shoppinglist-list.component';
import { ShoppinglistItemComponent } from './shoppinglist-item/shoppinglist-item.component';
import { ShoppinglistDetailComponent } from './shoppinglist-detail/shoppinglist-detail.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ShoppinglistListComponent,
    ShoppinglistItemComponent,
    ShoppinglistDetailComponent,
    ShoppinglistComponent,
    LoginComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCheckboxModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
