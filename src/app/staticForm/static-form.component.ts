import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './static-form.component.html',
  styleUrls: ['./static-form.component.scss']
})

export class StaticFormComponent implements OnInit, OnChanges{
  @Input() pages = [];
  constructor () {}

  ngOnInit() {

  }

  ngOnChanges() {
    console.log(this.pages);
  }
}
