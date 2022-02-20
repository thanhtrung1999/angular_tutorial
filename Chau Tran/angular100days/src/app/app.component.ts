import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { interval } from 'rxjs';
import { ToggleComponent } from './Components/toggle/toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @ViewChild('toggleComp') toggleComp?: ToggleComponent
  // @ViewChild(ToggleComponent, { static: true }) toggleComp?: ToggleComponent
  @ViewChildren(ToggleComponent) toggleComps?: QueryList<ToggleComponent>
  @ViewChild('toggleBtn', { static: true }) toggleBtnComp?: ElementRef<HTMLButtonElement>
  @ViewChild('nameInput', { static: true }) nameInput?: ElementRef<HTMLInputElement>

  user = {
    name: 'Trung',
    age: 20
  }
  name: string = 'Thanh Trung'

  isDanger: boolean = false
  isWarning: boolean = false

  currentProgress: number = 70

  isChecked: boolean = true;

  showLast: boolean = false

  questions = {
    question1: false,
    question2: true
  }

  counter = 1;
  navs = ['Active', 'Link 1', 'Link 2']

  currentTabIndex = 0

  showTabPanel = true

  currentDate = new Date()
  _interval = interval(1000)
  addr = {
    add1: 'Ha Dong',
    add2: 'Thuong Tin',
    city: 'HN',
    zip: '100000',
    country: 'VN'
  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.nameInput?.nativeElement.focus()
    //   console.log('focusing');
    // }, 3000)
    console.log('app component onInit', this.toggleBtnComp);
    this.toggleComps?.changes.subscribe(console.log);
  }

  ngAfterViewInit(): void {
    console.log('app component after view init');
    this.toggleComps?.changes.subscribe(console.log);
  }

  handler(e: any): void {
    console.log(e);
  }
}
