import { Component, OnInit, AfterContentInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit, AfterViewChecked {
  public fields = [
    { x: 20, y: 20, width: 160, height: 40, value: '', page: 1 },
    { x: 220, y: 20, width: 160, height: 40, value: '', page: 1 },
    { x: 20, y: 80, width: 160, height: 40, value: '', page: 1 },
    { x: 220, y: 80, width: 160, height: 40, value: '', page: 1 },
    { x: 20, y: 140, width: 160, height: 40, value: '', page: 1 },
    { x: 220, y: 140, width: 160, height: 40, value: '', page: 1 },
    { x: 20, y: 440, width: 100, height: 40, value: '', page: 1 },
    { x: 140, y: 440, width: 100, height: 40, value: '', page: 1 },
    { x: 260, y: 440, width: 100, height: 40, value: '', page: 1 },
    { x: 20, y: 20, width: 160, height: 40, value: '', page: 2 },
    { x: 220, y: 20, width: 160, height: 40, value: '', page: 2 },
    { x: 20, y: 80, width: 160, height: 40, value: '', page: 2 },
    { x: 220, y: 80, width: 160, height: 40, value: '', page: 2 },
    { x: 20, y: 140, width: 160, height: 40, value: '', page: 2 },
    { x: 220, y: 140, width: 160, height: 40, value: '', page: 2 }
  ];
  public page1 = [];
  public page2 = [];
  public pages = [];

  constructor() {}

  ngOnInit() {
    this.fields.forEach(field => {
      field['styles'] = this.prepareStyles(field);
      if (field.page === 1) {
        this.page1.push(field);
      } else {
        this.page2.push(field);
      }
    });
    this.pages.push({fields: this.page1});
    this.pages.push({fields: this.page2})
  }

  ngAfterContentInit() {
  }

  ngAfterViewChecked() {
  }

  prepareStyles(field) {
    return {
      left: field['x'] + 'px',
      top: field['y'] + 'px',
      width: field['width'] + 'px',
      height: field['height'] + 'px'
    }
  }
}
