import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

 public cur_slide = 0;
 public pslide = 0;
 public pdir = 0;

 constructor() {

 }

 ngOnInit() {
  setInterval(() => {
   if (this.pdir == 0) {
    if (this.pslide < 2) {
     this.pslide++;
    } else {
     this.pdir = 1;
     this.pslide--;
    }
   } else {
    if (this.pslide > 0) {
     this.pslide--;
    } else {
     this.pdir = 0;
     this.pslide++;
    }
   }
  }, 2500);
 }

 incSlide() {
  if (this.cur_slide < 3) {
   this.cur_slide++;
   let el:any = document.querySelector('div.video-slide iframe');
   el.contentWindow.location.reload();
  }
 }

 decSlide() {
  if (this.cur_slide > 0) {
   this.cur_slide--;
   let el:any = document.querySelector('div.video-slide iframe');
   el.contentWindow.location.reload();
  }
 }

}
