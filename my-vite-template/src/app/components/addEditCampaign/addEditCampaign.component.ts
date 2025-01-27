import {
  Component,
  computed,
  Inject,
  inject,
  model,
  signal,
} from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import {
  AbstractControl,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import {
  MatSlideToggleModule,
  _MatSlideToggleRequiredValidatorModule,
} from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import axios from 'axios';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

export interface DialogData {
  campaignName: string;
  keywords: string[];
  bidAmount: number;
  campaignFund: number;
  town: string;
  radius: number;
  status: boolean;
}

@Component({
  selector: 'dialog',
  templateUrl: 'addEditCampaign.html',
  styleUrl: 'addEditCampaign.css',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatSelectModule,
    ReactiveFormsModule,
    NgIf,
  ],
})
export class AddEditCampaign {
  async fetchCities() {
    try {
      const response = await axios.get(
        'http://api.geonames.org/searchJSON?country=PL&featureClass=P&maxRows=1000&username=bartlomiejp'
      );
      return response.data.geonames
        .map((el: any) => el.toponymName)
        .sort((a: string, b: string) => a.localeCompare(b));
    } catch (error) {
      console.error('Error fetching cities:', error);
      throw error;
    }
  }
  cities: string[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: DialogData) {
    // Assuming cities are fetched or set up elsewhere in the code
    this.cities = ['Kraków', 'Warsaw', 'Gdańsk', 'Wrocław']; // Example city list
  }

  ngOnInit() {
    this.fetchCities()
      .then((cities) => {
        this.cities = cities; // Assign the result to `foods`
        console.log('City names assigned to cities:', this.cities);
      })
      .catch((error) => {
        console.error('Error fetching city names:', error);
      });
  }

  readonly dialogRef = inject(MatDialogRef<AddEditCampaign>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly campaignName = model(this.data.campaignName);
  // readonly keywords = model(this.data.keywords);
  readonly bidAmount = model(this.data.bidAmount);
  readonly campaignFund = model(this.data.campaignFund);
  readonly town = model(this.data.town);
  readonly radius = model(this.data.radius);
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  readonly currentKeyword = model('');
  readonly keywords = signal(['campaign']);
  readonly status = model(this.data.status);

  selectedCity: string | undefined;
  numberFormControl = new FormGroup({
    campaignName: new FormControl('', Validators.required),
    bidAmount: new FormControl('', [Validators.required, Validators.min(1000)]),
    campaignFund: new FormControl('', [
      Validators.required,
      Validators.min(1000),
    ]),
    town: new FormControl('', Validators.required),
    radius: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
  });
  get radiusControl(): FormControl {
    return this.numberFormControl.get('radius') as FormControl;
  }
  get townControl(): FormControl {
    return this.numberFormControl.get('town') as FormControl;
  }
  get campaignFundControl(): FormControl {
    return this.numberFormControl.get('campaignFund') as FormControl;
  }
  get bidAmountControl(): FormControl {
    return this.numberFormControl.get('bidAmount') as FormControl;
  }
  get campaignNameControl(): FormControl {
    return this.numberFormControl.get('campaignName') as FormControl;
  }

  readonly announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.keywords.update((keywords) => [...keywords, value]);
    }

    // Clear the input value
    this.currentKeyword.set('');
  }

  remove(keyword: string): void {
    this.keywords.update((keywords) => {
      const index = keywords.indexOf(keyword);
      if (index < 0) {
        return keywords;
      }

      keywords.splice(index, 1);
      this.announcer.announce(`Removed ${keyword}`);
      return [...keywords];
    });
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.keywords.update((keywords) => [...keywords, event.option.viewValue]);
    this.currentKeyword.set('');
    event.option.deselect();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    // Log the form data to the console
    console.log('Form Data:', {
      bidAmount: this.numberFormControl.value,
    });

    // Close the dialog
    this.dialogRef.close();
  }
}
