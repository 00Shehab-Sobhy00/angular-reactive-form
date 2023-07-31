import { Directive, OnInit } from "@angular/core";
import { MatSelect } from "@angular/material/select";

@Directive({
    selector: '[myDirective]'
  })
  export class MyDirective implements OnInit {
  
    constructor(private select:MatSelect) { }
  
    ngOnInit() {
      this.select.openedChange.subscribe((isOpen: any) => {
        if(isOpen) {
          console.log('open', this.select.panel);
        }
      })
    }
  }