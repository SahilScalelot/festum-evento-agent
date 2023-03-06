import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { ValidNumberDirective } from "../directives/valid-number.directive";
import { ValidNumberWithDecimalDirective } from "../directives/valid-number-with-decimal.directive";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ValidAlphabetDirective } from '../directives/valid-alphabet.directive';

@NgModule({
  declarations: [
    ValidNumberDirective,
    ValidAlphabetDirective,
    ValidNumberWithDecimalDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    ValidNumberDirective,
    ValidAlphabetDirective,
    ValidNumberWithDecimalDirective,
  ]
})
export class SharedModule {
}
