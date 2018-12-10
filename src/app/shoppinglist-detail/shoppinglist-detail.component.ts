import {Component, Input, OnInit} from '@angular/core';
import {Shoppinglist} from '../shoppinglist.model';

@Component({
  selector: 'app-shoppinglist-detail',
  templateUrl: './shoppinglist-detail.component.html',
  styleUrls: ['./shoppinglist-detail.component.css']
})
export class ShoppinglistDetailComponent implements OnInit {
  @Input() shoppinglist: Shoppinglist;
  constructor() { }

  ngOnInit() {
  }

  addToItems(item) {
    this.shoppinglist.items.push(item.value);
  }

  deleteItem(index) {
    this.shoppinglist.items.splice(index, 1);
    console.log(index);
  }
}
