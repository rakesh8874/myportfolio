import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  moveToContact(){
    document.getElementById('footer')?.scrollIntoView({behavior:'smooth'});
  }

  moveToProjects(){
    document.getElementById('project')?.scrollIntoView({behavior:'smooth'});
  }

  moveToSkills(){
    document.getElementById('skill')?.scrollIntoView({behavior:'smooth'});
  }

  moveToAbout(){
    document.getElementById('about')?.scrollIntoView({behavior:'smooth'});
  }

}
