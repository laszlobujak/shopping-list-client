import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Shoppinglist} from '../shoppinglist.model';

@Component({
  selector: 'app-shoppinglist-item',
  templateUrl: './shoppinglist-item.component.html',
  styleUrls: ['./shoppinglist-item.component.css']
})
export class ShoppinglistItemComponent implements OnInit {
  @Input() shoppinglist: Shoppinglist;
  @Output() shoppinglistSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onSelected() {
    this.shoppinglistSelected.emit();
  }


}
