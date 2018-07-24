import { Component } from '@angular/core';
import * as Handsontable from 'handsontable-pro';

function titleRenderer(instance, td, row, col, prop, value, cellProperties) {
  Handsontable.renderers.TextRenderer.apply(this, arguments);
  Handsontable.dom.fastInnerHTML(td, '<h3>' + value +'('+ instance.alignText +')'+'</h3>');
  td.style.textAlign = 'center';
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  private hotId: string = 'HeroesTable';
  private data: any[];
  private cells?: (row?: number, col?: number, prop?: object) => {};
  public alignText: string;
  constructor() {
    this.alignText='m3';
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
