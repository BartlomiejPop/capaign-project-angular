import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Header } from './components/header/header.component';
import { CampaignsGrid } from './components/campaignsGrid/campaignsGrid.component';
import { mockData } from './mockData';
import { AddEditCampaign } from './components/addEditCampaign/addEditCampaign.component';

@Component({
  selector: 'app-root',
  template: `
    <header></header>
    <campaigns-grid [campaigns]="campaigns"></campaigns-grid>
  `,
  imports: [Header, CampaignsGrid],
})
export class AppComponent {
  campaigns = mockData;
}
