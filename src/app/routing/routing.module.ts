import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from '../main-page/main-page.component';
import {ShoppinglistComponent} from '../shoppinglist/shoppinglist.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
    {
        path: '',
        component: MainPageComponent
    },
    {
        path: 'shoppinglists',
        component: ShoppinglistComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
