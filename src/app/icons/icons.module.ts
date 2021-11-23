import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChartjsComponent} from './chartjs/chartjs.component';
import {D3jsComponent} from './d3js/d3js.component';
import {HighchartsComponent} from './highcharts/highcharts.component';
import {KharazmiComponent} from './kharazmi/kharazmi.component';
import {OgmaComponent} from './ogma/ogma.component';
import {UberComponent} from './uber/uber.component';

@NgModule({
    declarations: [
        ChartjsComponent,
        D3jsComponent,
        HighchartsComponent,
        KharazmiComponent,
        OgmaComponent,
        UberComponent,
    ],
    imports: [CommonModule],
    exports: [
        ChartjsComponent,
        D3jsComponent,
        HighchartsComponent,
        KharazmiComponent,
        OgmaComponent,
        UberComponent,
    ],
})
export class IconsModule {}
