import {Component, OnInit} from '@angular/core';
import {CONSTANTS} from '../../common/constants';
import {OrganizersService} from './organizers.service';
import {GlobalFunctions} from "../../common/global-functions";
import {Router} from "@angular/router";
import * as _ from "lodash";
import { PrimeNGConfig } from 'primeng/api';
import { SnotifyService } from 'ng-snotify';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-organizers',
  templateUrl: './organizers.component.html',
  styleUrls: ['./organizers.component.scss']
})
export class OrganizersComponent implements OnInit {
  isAddEvent: boolean = false;
  organizers: any = [];
  constants: any = CONSTANTS;  
  isLoading: boolean = false;  
  selectedEventIds: any = [];
  agentId: any = '';
  

  pTotal: any;
  paging: any;
  perPageLimit: any = 4;
  offset: any = 1;

  constructor(
    private _organizersService: OrganizersService,
    private _globalService: GlobalService,
    private _router: Router,
    private _sNotify: SnotifyService,
    private _globalFunctions: GlobalFunctions,
    private _primengConfig: PrimeNGConfig,
  ) {
  }

  ngOnInit(): void {
    this._globalService.loginUser$.subscribe((user: any) => {
      if (user) {
        this.agentId = user?._id || '';
      }
    })
    this.getOrganizers();
  }

  checkClick(event: any, eventObj: any = {}): void {
    event.stopPropagation();
    this._sNotify.clear();
    if (!eventObj.is_approved) { 
      this._sNotify.error('Wait for Event Verified.', 'Oops');
    }else if (eventObj.is_live) {
      this._sNotify.error('Event already Live.', 'Oops');
    }
  }

  getOrganizers(event: any = ''): void {
    this.isLoading = true;
    const page = event ? (event.page + 1) : 1;
    const filter: any = {
      page : page || '1',
      limit : event?.rows || '10',
      search: ""
    };
    this._organizersService.organizersList(filter).subscribe((result: any) => {
      if (result && result.IsSuccess) {
        this.paging = result.Data;
        this.organizers = result.Data.docs;
      } else {
        this._globalFunctions.successErrorHandling(result, this, true);
      }
      this.isLoading = false;
    }, (error: any) => {
      this._globalFunctions.errorHanding(error, this, true);
      this.isLoading = false;
    });
  }

  addOrganizer(): void {
    window.open('http://festumevento.com/#/register/' + this.agentId, '_blank');
    // window.open('http://localhost:4200/#/register/' + this.agentId, '_blank');
  }

  gotoEventOverview(event: any, eventObj: any): void {
    this._router.navigate(['/organizers/' + eventObj.id]);
  }

}
