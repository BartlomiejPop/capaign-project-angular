import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Header } from './components/header/header.component';
import { CampaignsGrid } from './components/campaignsGrid/campaignsGrid.component';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <header></header>
    <campaigns-grid></campaigns-grid>
  `,
  imports: [Header, CampaignsGrid],
})
export class AppComponent {}
