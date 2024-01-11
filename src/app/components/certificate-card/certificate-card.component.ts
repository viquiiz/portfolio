import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate-card',
  templateUrl: './certificate-card.component.html',
  styleUrls: ['./certificate-card.component.css']
})
export class CertificateCardComponent implements OnInit{

  @Input()
  title:string = "input title"
  @Input()
  description:string = "input description"
  @Input()
  date:string = "input date"
  @Input()
  workload:string = "input workload"
  @Input()
  link:string = ""

  ngOnInit(): void {
  }

}
