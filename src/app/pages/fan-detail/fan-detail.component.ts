import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fan } from 'src/app/models/fan';
import { FanService } from 'src/app/services/fan.service';

@Component({
  selector: 'app-fan-detail',
  templateUrl: './fan-detail.component.html',
  styleUrls: ['./fan-detail.component.scss']
})
export class FanDetailComponent implements OnInit {

  fan!: Fan;
  fanId!: number;

  constructor(
    private _fanService: FanService,
    private _ar: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.fanId = this._ar.snapshot.params['id'];
    this.fan = this._fanService.getOne(this.fanId);
    if (!this.fan) {
      this._router.navigate(['']);
    }
  }
}
