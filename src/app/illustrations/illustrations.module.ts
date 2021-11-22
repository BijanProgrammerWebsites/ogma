import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoverComponent} from './cover/cover.component';
import {WatermarkComponent} from './watermark/watermark.component';

@NgModule({
    declarations: [
        CoverComponent,
        WatermarkComponent,
    ],
    imports: [CommonModule],
    exports: [
        CoverComponent,
        WatermarkComponent,
    ],
})
export class IllustrationsModule {}
