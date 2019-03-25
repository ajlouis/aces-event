import { Component, OnInit, Input } from '@angular/core';
import { MainEvent } from 'src/app/models/event-models';
import { Service } from 'src/app/services/service';
import { FormBuilder, Validators, AbstractControl, FormGroup } from '@angular/forms';
import { ACSEvent } from 'src/app/interfaces/event';
import { TypesService } from 'src/app/services/types.service';
import { MainEventService } from 'src/app/services/main-event.service';

@Component({
  selector: 'app-main-event-editor',
  templateUrl: './main-event-editor.component.html',
  styleUrls: ['./main-event-editor.component.css']
})

export class MainEventEditorComponent implements OnInit {
  @Input()
  mainEvent: MainEvent;

  eventForm: FormGroup;

  file: any;
  imageUrl = '';

  constructor(private fb: FormBuilder, private typesService: TypesService, private mainEventService: MainEventService) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.eventForm = this.fb.group({
      eventTitle: [this.mainEvent.title, Validators.compose([Validators.required])],
      venue: [this.mainEvent.venue, Validators.required],
      eventCategory: [this.mainEvent.eventCategoryId, Validators.required],
      startDate: [this.mainEvent.startDate, Validators.compose([Validators.required, this.startDateValidation])],
      endDate: [this.mainEvent.endDate, Validators.compose([Validators.required, this.endDateValidation])],
      aboutEvent: [this.mainEvent.description, Validators.required],
      bannerUrl: [this.mainEvent.bannerUrl,Validators.required],
      location: [this.mainEvent.locationId, Validators.required],
      eventStatus: [this.mainEvent.eventStatusId, Validators.required],
      isPublic: [this.mainEvent.isPublic, Validators.required]
    });
  }

  startDateValidation(control: AbstractControl) {
    const currentDate = Date.now();
    const startDate = Date.parse(control.value);
    if (startDate < currentDate) {
      return { validDate: true };
    } else {
      return null;
    }
  }

  endDateValidation(control: AbstractControl) {
    const currentDate = Date.now();
    const endDate = Date.parse(control.value);
    if (endDate < currentDate) {
      return { validDate: true };
    } else {
      return null;
    }
  }

  uploadImage() {
    const fileReader = new FileReader();
    fileReader.onload = (e:any) => {
      this.imageUrl = e.currentTarget.result;
      console.log(this.imageUrl);
    };
    fileReader.readAsDataURL(this.file);
    // fileReader.readAsBinaryString(this.file);
  }

  fileChanged(e) {
    this.file = e.target.files[0];
    this.uploadImage();
  }

  convertToNumber(number) {
    const date = parseInt(number);
    console.log(date);
  }

  onSubmit(event: any) {
    console.log(event);
     this.mainEventService.saveMainEvent(event);
  }
}
