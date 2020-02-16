import { Component, OnInit } from '@angular/core';
import { FlickerResponse } from '../models/flickerresponse';
import { FlickrService } from '../flickr.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {

  flickerResponse$: Observable<FlickerResponse>;

  constructor(private flickrService: FlickrService) { }

  ngOnInit() {
    this.flickerResponse$ = this.flickrService.getPhotos();
  }
}
