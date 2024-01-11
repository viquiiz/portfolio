import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.css']
})

export class SkillsPageComponent implements OnInit {

  ngOnInit(): void {
  }

  hardSkills = true;
  softSkills = false;

  activeButton: number = 1;

  showElement(elementNumber: number): void {
    if (elementNumber === 1) {
      this.hardSkills = true;
      this.softSkills = false;
    } else if (elementNumber === 2) {
      this.hardSkills = false;
      this.softSkills = true;
    }
  }

  activateButton(button: number): void {
    this.activeButton = button;
  }
}
