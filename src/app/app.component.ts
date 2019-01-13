import {Component, OnInit, OnChanges, OnDestroy, SimpleChanges, ViewChild} from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, OnChanges {
  title = 'ComponentBasics';


  // we can access component child controller using viewChild and this allow us to injected inside out controller
  @ViewChild(DashboardComponent) dashboard:DashboardComponent;

  refresh()
  {
    this.dashboard.generateData();
  }


  // fires every time the @input value change passed from parent component
  ngOnChanges(changes: SimpleChanges): void {
    console.log('on change hooks');
  }



  /// executed before component destroyed
  ngOnDestroy(): void {
    console.log('on destroy hooks');

  }
  // run after the component fully  initialed
/*
* here you can run api  fetching
*
*
* */
  ngOnInit(): void {
    console.log('on inti hooks');
  }
}
