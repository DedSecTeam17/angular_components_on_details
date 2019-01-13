import { Component, OnInit ,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  // this event will emit any data with it so we use null
  //  event emmit to parent component not like DOM
  @Output() onRefresh:EventEmitter<null> =new EventEmitter<null>();




  constructor() { }

  ngOnInit() {
  }

  refresh(){
    this.onRefresh.emit();
  }

}
