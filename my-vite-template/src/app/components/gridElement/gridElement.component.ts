import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common'; // Zaimportuj CommonModule
import { NgFor } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddEditCampaign } from '../addEditCampaign/addEditCampaign.component';

/**
 * @title Basic grid-list
 */
@Component({
  selector: 'grid-element',
  styleUrl: 'gridElement.css',
  templateUrl: 'gridElement.html',
  imports: [
    MatCardModule,
    MatChipsModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonModule,
    NgFor,
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridElement {
  constructor(private dialog: MatDialog) {}
  @Input() campaign: any;
  openDialog(campaign: any): void {
    this.dialog.open(AddEditCampaign, {
      width: '80%',
      data: {
        campaign,
      },
    });
  }
}
