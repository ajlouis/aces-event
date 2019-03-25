import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubEvent } from '../../../../../models/event-models';
import { SubEventService } from 'src/app/services/sub-event.service';
import { toDate } from '@angular/common/src/i18n/format_date';

@Component({
    selector: 'app-sub-event',
    templateUrl: './sub-event.component.html',
    styleUrls: ['./sub-event.component.css']
})
export class SubEventComponent implements OnInit {
    file: any;
    imageUrl = '';
    subEvent: SubEvent;
    data: number;

    subEventForm;

    constructor(private activatedRoute: ActivatedRoute, private subEventService: SubEventService, private route:Router) { }

    x;

    ngOnInit() {
        this.activatedRoute.data.subscribe(result => {

            this.x = result.data;
            console.log("ex: ",this.x);
            
            // this.subEvent = sEvent.data;
            // this.mainEventId = sEvent.mainEventI
            // console.log("mainEventId",this.mainEventId);
            // console.log("subEvent",this.subEvent);
        });



        if (isNaN(this.x)) {
            

                this.subEventForm = new FormGroup({
                    title: new FormControl(this.x.title, Validators.required),
                    time: new FormControl(this.x.createdAt, Validators.required),
                    startDate: new FormControl(this.x.startDate, Validators.required),
                    eventCoverPhoto: new FormControl('', Validators.required),
                    description: new FormControl(this.x.description, Validators.required),
            });

        } else {
            this.subEventForm = new FormGroup({
                title: new FormControl('', Validators.required),
                time: new FormControl('', Validators.required),
                startDate: new FormControl('', Validators.required),
                eventCoverPhoto: new FormControl('', Validators.required),
                description: new FormControl('', Validators.required),
            });
        }

    }

    uploadImage() {
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
            console.log(fileReader.result);
            this.imageUrl = fileReader.result.toString();
            console.log('image load');
        };
        fileReader.readAsDataURL(this.file);
    }

    fileChanged(e) {
        this.file = e.target.file;
        console.log(this.file);

        this.uploadImage();

    }

    destination;
     
    onSubmit(subEvent: SubEvent) {
        
        console.log(subEvent);
        
        subEvent.startDate  = Date.parse(subEvent.startDate.toString());
        console.log('formated time: ',subEvent.time);
        subEvent.mainEventId = this.x;
        this.subEventService.saveSubEvent(subEvent);
        // this.activatedRoute.parent.url.subscribe((urlPath)=>{
           // this.destination =  urlPath[urlPath.length - 1].path;
        //});
       // console.log("route",this.destination);
        //console.log(this.destination);
        
        //this.route.navigate([this.destination]);
    }

    

}
