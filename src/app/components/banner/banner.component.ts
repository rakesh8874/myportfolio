import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  moveToContact(){
    document.getElementById('footer')?.scrollIntoView({behavior:'smooth'});
  }

}
