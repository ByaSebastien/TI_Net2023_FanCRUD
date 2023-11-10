import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Fan } from 'src/app/models/fan';
import { FanService } from 'src/app/services/fan.service';

@Component({
  selector: 'app-fan-create',
  templateUrl: './fan-create.component.html',
  styleUrls: ['./fan-create.component.scss']
})
export class FanCreateComponent {

  fg!: FormGroup;

  constructor(
    private _fanService: FanService,
    private _fb: FormBuilder,
    private _router: Router) {

    this.fg = _fb.group({
      name: [null, Validators.required],
      birthdate: [null, this.birthdateValidator()],
      series: _fb.array([
        new FormControl(null, Validators.required)
      ])
    })
  }

  get formArray(): FormArray {
    return this.fg.get('series') as FormArray;
  }

  addSerie() {
    this.formArray.push(new FormControl(null, Validators.required));
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
      birthdate: this.fg.get('birthdate')?.value,
      series: this.fg.get('series')?.value.map((title: string) => ({ title })),
    }
    this._fanService.add(fan);
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
