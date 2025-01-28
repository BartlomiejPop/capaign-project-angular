import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
  model,
} from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common'; // Zaimportuj CommonModule
import { NgFor } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {
  AddEditCampaign,
  DialogData,
} from '../addEditCampaign/addEditCampaign.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { mockData } from '../../mockData';

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
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
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
  deleteCampaign(campaign: any) {
    const indexOfCampaignToDelete = mockData.indexOf(campaign);
    mockData.splice(indexOfCampaignToDelete, 1);
  }
}
