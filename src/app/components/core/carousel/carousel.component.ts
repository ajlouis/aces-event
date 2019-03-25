import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import { MainEventCarouselItem } from 'src/app/models/event-models';
import { defaultBanner } from 'src/app/models/utils';
import { MainEventService } from 'src/app/services/main-event.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  carouselItems: MainEventCarouselItem[] = [];
  bannerUrl = defaultBanner;
  // items = [1,2,3];

  constructor(private mainEventService:MainEventService) { }

  ngOnInit() {
    this.mainEventService.getHighlightedMainEvents().subscribe(
      carouselItems => {
        this.carouselItems = carouselItems
      }
    );
  }

}
