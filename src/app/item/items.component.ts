import { Component, OnInit } from '@angular/core'

import { Item } from './item'
import { ItemService } from './item.service'
import { Label } from '@nativescript/core'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Array<Item>
  icon = String.fromCharCode(0xe838)
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems()
  }

  iconLoaded(event) {
    const lbl: Label = event.object
    lbl.style.fontVariationSettings = [{ axis: 'FILL', value: 1 }, { axis: 'wght', value: 700}, { axis: 'opsz', value: 48}]
  }
}
