import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoverComponent} from './cover/cover.component';
import {Network1Component} from './network1/network1.component';
import {Network2Component} from './network2/network2.component';
import {Network3Component} from './network3/network3.component';
import {WatermarkComponent} from './watermark/watermark.component';

@NgModule({
    declarations: [
        CoverComponent,
        Network1Component,
        Network2Component,
        Network3Component,
        WatermarkComponent,
    ],
    imports: [CommonModule],
    exports: [
        CoverComponent,
        Network1Component,
        Network2Component,
        Network3Component,
        WatermarkComponent,
    ],
})
export class IllustrationsModule {}
