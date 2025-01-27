import { Component, Input } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { GridElement } from '../gridElement/gridElement.component';
import { NgFor } from '@angular/common';

/**
 * @title Basic grid-list
 */
@Component({
  selector: 'campaigns-grid',
  styleUrl: 'campaignsGrid.css',
  templateUrl: 'campaignsGrid.html',
  imports: [GridElement, NgFor],
})
export class CampaignsGrid {
  @Input() campaigns: any[] = [];
}
