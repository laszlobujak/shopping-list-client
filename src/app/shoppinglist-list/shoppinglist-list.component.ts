import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Shoppinglist} from '../shoppinglist.model';

@Component({
  selector: 'app-shoppinglist-list',
  templateUrl: './shoppinglist-list.component.html',
  styleUrls: ['./shoppinglist-list.component.css']
})
export class ShoppinglistListComponent implements OnInit {
  @Output() shoppinglistWasSelected = new EventEmitter<Shoppinglist>();
  shoppinglists: Shoppinglist[] = [
      new Shoppinglist('Tesco', new Date(), ['Kenyér', 'Villanykörte']),
      new Shoppinglist('CBA', new Date(), ['Vaj', 'Bor', 'Sör']),
      new Shoppinglist('Auchan', new Date(), ['Bajusz', 'Mogyoró', 'Telefon', 'Lámpa', 'Asztal'])
    ];
  constructor() { }

  ngOnInit() {
  }

  onShoppinglistSelected(shoppinglist: Shoppinglist) {
      this.shoppinglistWasSelected.emit(shoppinglist);
      console.log(shoppinglist);
  }
}
