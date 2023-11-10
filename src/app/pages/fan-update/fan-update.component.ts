import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Fan } from 'src/app/models/fan';
import { Serie } from 'src/app/models/serie';
import { FanService } from 'src/app/services/fan.service';

@Component({
  selector: 'app-fan-update',
  templateUrl: './fan-update.component.html',
  styleUrls: ['./fan-update.component.scss']
})
export class FanUpdateComponent implements OnInit {

  fg!: FormGroup;
  fanId!: number;
  currentFan!: Fan;

  constructor(
    private _fanService: FanService,
    private _fb: FormBuilder,
    private _router: Router,
    private _ar: ActivatedRoute) {

    this.fg = _fb.group({
      name: [null, Validators.required],
      birthdate: [null, this.birthdateValidator()],
      series: _fb.array([])
    })
  }
  ngOnInit(): void {
    this.fanId = this._ar.snapshot.params['id'];
    this.currentFan = this._fanService.getOne(this.fanId);
    if (!this.currentFan) {
      this._router.navigate(['']);
    }
    this.fg.get('name')?.patchValue(this.currentFan.name);
    this.fg.get('birthdate')?.patchValue(this.currentFan.birthdate?.toISOString().substring(0, 10));
    for (let serie of this.currentFan.series) {
      this.addSerieWithTitle(serie.title);
    }
  }

  get formArray(): FormArray {
    return this.fg.get('series') as FormArray;
  }

  addSerie() {
    this.formArray.push(new FormControl(null, Validators.required));
  }

  addSerieWithTitle(title: string) {
    this.formArray.push(new FormControl(title, Validators.required));
  }

  removeSerie(i: number) {
    this.formArray.removeAt(i);
  }

  onSubmit(): void {
    if (!this.fg.valid) {
      return;
    }
    let fan: Fan = {
      name: this.fg.get('name')?.value,
      birthdate: new Date(this.fg.get('birthdate')?.value),
      series: this.fg.get('series')?.value.map((title: string) => ({ title })),
    }
    this._fanService.update(this.fanId, fan);
    this._router.navigate(['']);
  }

  birthdateValidator(): ValidatorFn | null {
    return (control: AbstractControl) => {
      if (new Date().getFullYear() - new Date(control.value).getFullYear() >= 13) {
        return null;
      }
      return { tooYoung: true }
    }
  }
}
