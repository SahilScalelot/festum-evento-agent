import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content.component';
import { ProfileComponent } from './profile/profile.component';
import { ModalModule } from '../_modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RadioButtonModule } from 'primeng/radiobutton';
import { AccordionModule } from 'primeng/accordion';
import { ImageModule } from 'primeng/image';
import { TooltipModule } from 'primeng/tooltip';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TranslateModule } from "@ngx-translate/core";
import { RatingModule } from 'primeng/rating';
import { SwiperModule } from 'swiper/angular';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent
  }
];

@NgModule({
  declarations: [
    ContentComponent,
    ProfileComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    MatProgressSpinnerModule,
    CommonModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule,
    ProgressSpinnerModule,
    RadioButtonModule,
    AccordionModule,
    ImageModule,
    TooltipModule,
    CKEditorModule,
    TranslateModule,
    SwiperModule,
    RatingModule,
    ProgressBarModule,
    DropdownModule,
    SharedModule
  ]
})
export class ContentModule {
}