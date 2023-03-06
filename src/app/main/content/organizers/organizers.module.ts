import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrganizersComponent } from "./organizers.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../../shared/shared.module";
import { RatingModule } from 'primeng/rating';
import { CheckboxModule } from 'primeng/checkbox';
import { PaginatorModule } from 'primeng/paginator';
import { AgmCoreModule } from '@agm/core';
import { ImageModule } from 'primeng/image';
import { TranslateModule } from "@ngx-translate/core";
import { ProgressBarModule } from "primeng/progressbar";
import { MatExpansionModule } from '@angular/material/expansion';

const routes: Routes = [
  {
    path: '', component: OrganizersComponent
  },
];

@NgModule({
  declarations: [
    OrganizersComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RatingModule,
    CheckboxModule,
    PaginatorModule,
    ImageModule,
    MatExpansionModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDLgr8YB5IK8dBIEWClexZGzXaB7UlVm7Q',
      libraries: ['places']
    }),
    TranslateModule,
    ProgressBarModule
  ]
})
export class OrganizersModule {
}
