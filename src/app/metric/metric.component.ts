import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
    changeDetection:ChangeDetectionStrategy.OnPush
})

export class MetricComponent implements OnInit , OnChanges {
    private _value: number = 9;
    private _max: number = 109;


    // @Input() title: string = '';
    // @Input() description: string = '';
    @Input('used')
    set  value(value:number){
      if (isNaN(value)) value=0;
          this._value=value;

    }
    get value():number{
      return this._value;
    }



    @Input('available')
    set  max(max:number){
      if (isNaN(max)) max=0;
        this._max=max;
    }
    get max():number
    {
      return this._max;
    }


  constructor() { }

  ngOnInit() {
  }


    isDanger() {
        return this.value / this.max > 0.7;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.value && isNaN(changes.value.currentValue))  this.value=0;
        if (changes.max && isNaN(changes.max.currentValue))  this.max=0;

    }
}
