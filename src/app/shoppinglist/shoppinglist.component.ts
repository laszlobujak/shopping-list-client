import { Component, OnInit } from '@angular/core';
import {Shoppinglist} from '../shoppinglist.model';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  selectedShoppingList: Shoppinglist;
  constructor() { }

  ngOnInit() {
  }

}
