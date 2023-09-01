import { Component, OnInit } from '@angular/core';

interface City {
    name: string;
    code: string;
}
@Component({
    selector: 'dropdown-basic-demo',
    templateUrl: './dropdown-basic-demo.html'
})
export class DropdownBasicDemo implements OnInit {
    cities: City[];

    selectedCity: City;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}