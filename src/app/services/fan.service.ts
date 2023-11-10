import { Injectable } from '@angular/core';
import { Fan } from '../models/fan';

@Injectable({
  providedIn: 'root'
})
export class FanService {

  fans: Fan[] = [
    {
      name: 'Bambino',
      birthdate: new Date(1991, 3, 27),
      series: [
        { title: 'DMC' },
        { title: 'Spider Man' }
      ]
    },
    {
      name: 'Roger',
      birthdate: new Date(1991, 7, 27),
      series: [
        { title: 'Woody wood pecker' },
        { title: 'Marine' }
      ]
    }
  ];

  constructor() { }

  add(fan: Fan): void {
    this.fans.push(fan);
  }

  getOne(i: number): Fan {
    return this.fans[i];
  }

  getAll(): Fan[] {
    return this.fans;
  }

  update(i: number, fan: Fan): void {
    this.fans[i] = fan;
  }
}
