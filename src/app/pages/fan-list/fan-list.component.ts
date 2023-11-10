import { Component, OnInit } from '@angular/core';
import { Fan } from 'src/app/models/fan';
import { FanService } from 'src/app/services/fan.service';

@Component({
    selector: 'app-fan-list',
    templateUrl: './fan-list.component.html',
    styleUrls: ['./fan-list.component.scss']
})
export class FanListComponent implements OnInit {

    fans!: Fan[];

    constructor(private _fanService: FanService) { }

    ngOnInit(): void {
        this.fans = this._fanService.getAll();
    }
}
