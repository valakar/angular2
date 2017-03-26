import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'header',
    templateUrl: 'header.template.html',
    styleUrls: ['header.styles.sass']
})
export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('hello world');
    }

}
