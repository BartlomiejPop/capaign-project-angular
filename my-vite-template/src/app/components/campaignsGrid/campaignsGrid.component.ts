import { Component, HostListener } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { GridElement } from '../gridElement/gridElement.component';

/**
 * @title Basic grid-list
 */
@Component({
  selector: 'campaigns-grid',
  styleUrl: 'campaignsGrid.css',
  templateUrl: 'campaignsGrid.html',
  imports: [GridElement],
})
export class CampaignsGrid {}
