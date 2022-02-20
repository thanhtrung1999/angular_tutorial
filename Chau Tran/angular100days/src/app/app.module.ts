import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProgressBarComponent } from './Components/progress-bar/progress-bar.component';
import { UserListComponent } from './Components/users/user-list/user-list.component';
import { UserDetailComponent } from './Components/users/user-detail/user-detail.component';
import { ToggleComponent } from './Components/toggle/toggle.component';
import { TabsComponent } from './Components/tabs/tabs.component';
import { TabGroupComponent } from './Components/tabs/tab-group/tab-group.component';
import { TabPanelComponent } from './Components/tabs/tab-panel/tab-panel.component';
import { BsTabGroupComponent } from './Components/tabs/bs-tab-group/bs-tab-group.component';
import { CounterComponent } from './Components/counter/counter.component';
import { TabContentDirective } from './Directives/tab-content.directive';
import { FormatAddressPipe } from './Pipes/format-address.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    UserListComponent,
    UserDetailComponent,
    ToggleComponent,
    TabsComponent,
    TabGroupComponent,
    TabPanelComponent,
    BsTabGroupComponent,
    CounterComponent,
    TabContentDirective,
    FormatAddressPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
