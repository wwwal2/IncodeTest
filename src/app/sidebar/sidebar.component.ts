import { Component, OnInit } from '@angular/core';
import clients from '../../assets/clients.json';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  check:any = clients[0].general.firstName
  img:any = clients[0].general.avatar
}
