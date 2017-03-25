import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'main-layout',
    template:
        `<header></header>
<router-outlet></router-outlet>
<footer></footer>`
})
export class MainLayoutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
