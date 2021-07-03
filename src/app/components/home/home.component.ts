import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  photo: String = "https://www.pngitem.com/pimgs/m/255-2556127_computer-icons-task-or-action-item-icon-png.png";
  
  constructor() { }

  ngOnInit(): void {
  }

}
