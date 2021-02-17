import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { NavItem } from 'src/app/core/models/navbar.model';
import { SidebarService } from './services/sidebar-service.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  public navItems: NavItem[];
  panelOpenState = false;

  constructor(private _sideNav: SidebarService) {}

  ngOnInit(): void {
    this.navItems = this._sideNav.menuItems;
  }
}
