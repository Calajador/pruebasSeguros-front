import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavItem } from 'src/app/core/models/navbar.model';

@Component({
  selector: 'app-side-nav-item',
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['./side-nav-item.component.css'],
})
export class SideNavItemComponent implements OnInit {
  @Input() item: NavItem;
  @Output() sidenavToggle = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
