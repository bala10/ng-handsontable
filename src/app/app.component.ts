import { Component } from '@angular/core';
import * as Handsontable from 'handsontable-pro';

function titleRenderer(instance, td, row, col, prop, value, cellProperties) {
  Handsontable.renderers.TextRenderer.apply(this, arguments);
  Handsontable.dom.fastInnerHTML(td, '<h3>' + value +'</h3>');
  td.style.textAlign = this.alignText;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private hotId: string = 'HeroesTable';
  private data: any[];
  private cells?: (row?: number, col?: number, prop?: object) => {};
  public alignText: string;
  constructor() {
    this.alignText='center';
    this.data = [['Header'],
                  ['Body']];
    this.cells = (row, col, prop): any => {
      const cellProperties: any = {};

      if (row === 0 && col === 0) {
        Object.assign(cellProperties, { renderer: titleRenderer });
      }
      return cellProperties;
    }
  }
}
