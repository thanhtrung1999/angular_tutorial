import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name : string = 'Trung'
  public age : number
  public students : string[] = ["Trung", "Phuong"]

  constructor(private commonService: CommonService) {
    this.age = commonService.age
  }

  ngOnInit(): void {
  }

  public tangtuoi(): void {
    this.commonService.tangTuoi()
    this.age = this.commonService.age
  }
}
