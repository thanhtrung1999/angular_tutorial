import { Component, ContentChild, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TabContentDirective } from 'src/app/Directives/tab-content.directive';
import { TabGroupComponent } from '../tab-group/tab-group.component';

@Component({
  selector: 'app-tab-panel',
  template: `
    <ng-template> <!-- TemplateRef's instance -->
      <ng-content></ng-content>
    </ng-template>
  `,
  styles: [
  ]
})
export class TabPanelComponent implements OnInit {
  @Input() title!: string;
  @ViewChild(TemplateRef, { static: true }) private implicitBody!: TemplateRef<unknown>
  @ContentChild(TabContentDirective, { static: true, read: TemplateRef }) private explicitBody!: TemplateRef<unknown>

  public get panelBody(): TemplateRef<unknown> {
    return this.explicitBody || this.implicitBody
  }

  constructor(private tabGroup: TabGroupComponent) { }

  ngOnInit(): void {
    console.log('tab panel on init', this.explicitBody);
    this.tabGroup.addTab(this)
  }

  ngOnDestroy(): void {
    this.tabGroup.removeTab(this)
  }

}
