import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public age : number
  
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
