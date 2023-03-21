import { Component } from '@angular/core';
import { Skill } from 'src/app/models/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'MySql, MongoDB',
      level: 'Intermidiate',
      rating: 60,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'JAVA',
      level: 'Intermidiate',
      rating: 70,
    },
    {
      name: 'Spring/Spring Boot/Hibernate',
      level: 'Intermidiate',
      rating: 60,
    },
  ];


}
