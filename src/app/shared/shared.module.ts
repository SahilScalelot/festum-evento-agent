import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { ValidNumberDirective } from "../directives/valid-number.directive";
import { ValidNumberWithDecimalDirective } from "../directives/valid-number-with-decimal.directive";
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ValidAlphabetDirective } from '../directives/valid-alphabet.directive';
import { TermsAndConditionsComponent } from '../main/common/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from '../main/common/privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    ValidNumberDirective,
    ValidAlphabetDirective,
    ValidNumberWithDecimalDirective,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent
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
    TermsAndConditionsComponent,
    PrivacyPolicyComponent
  ]
})
export class SharedModule {
}
