import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  @Input()
  tag:string = " input tag"
  @Input()
  img:string = "input img"
  @Input()
  title:string = "input title"
  @Input()
  description:string = "input description"
  @Input()
  preview:string = "#"
  @Input()
  repository:string = "#"
  @Input()
  button1:string = ""
  @Input()
  button2:string = ""

  ngOnInit(): void {
  }

}
