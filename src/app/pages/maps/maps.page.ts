import {Component, OnInit, ViewChild} from '@angular/core';


@Component({
    selector: 'app-maps',
    styleUrls: ['./maps.page.scss'],
    templateUrl: './maps.page.html',
})
export class MapsPage implements OnInit {

    location = [
        {
            latitude: 52.280553,
            longitude: 8.056698,
            title: 'Skatepark',
            street: 'Schlachthofstraße',
            postcode: '49086 Osnabrück',
        },
        {
            latitude: 52.277248,
            longitude: 8.039240,
            title: 'Grüne Ganz',
            street: 'Große Gildewart 15',
            postcode: '49086 Osnabrück',
        },
        {
            latitude: 52.277479,
            longitude: 8.049999,
            title: 'Cinema-Arthouse',
            street: 'Erich-Maria-Remarque-Ring 16',
            postcode: '49086 Osnabrück',
        },
        {
            latitude: 52.277286,
            longitude: 8.055364,
            title: 'Caritas',
            street: 'Alte Poststr. 11',
            postcode: '49086 Osnabrück',
        },
        {
            latitude: 52.276634,
            longitude: 8.044654,
            title: 'Theater',
            street: 'Domhof 10/11',
            postcode: '49086 Osnabrück',
        },
        {
            latitude: 52.286094,
            longitude: 8.088336,
            title: 'Zum Laubenpieper',
            street: 'Schinkelbergstr. 51',
            postcode: '49086 Osnabrück',
        },
        {
            latitude: 52.270363,
            longitude: 8.044349,
            title: 'Schloßgarten',
            street: '',
            postcode: '49086 Osnabrück',
        }
    ];

    constructor() {
    }

    ngOnInit(): void {
    }


}
