import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  ngOnInit(): void {}


  ScrollTo(sectionId:string){
    const yPosition = this.FindSectionPosition(sectionId);

    if (yPosition) {
      window.scroll(0,yPosition);
    }

    return null;
  }

  FindSectionPosition(sectionId: string){
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
      const rect = sectionElement.getBoundingClientRect();
      return (rect.top + window.scrollY) - 60;
    }

    return null;
  }
}
