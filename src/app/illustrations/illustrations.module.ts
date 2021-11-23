import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoinTreeComponent} from './coin-tree/coin-tree.component';
import {CoverComponent} from './cover/cover.component';
import {GlobalSocialNetwork1Component} from './global-social-network1/global-social-network1.component';
import {GlobalSocialNetwork2Component} from './global-social-network2/global-social-network2.component';
import {GlobalSocialNetwork3Component} from './global-social-network3/global-social-network3.component';
import {GreenArrowsComponent} from './green-arrows/green-arrows.component';
import {Network1Component} from './network1/network1.component';
import {Network2Component} from './network2/network2.component';
import {Network3Component} from './network3/network3.component';
import {OgmaComponent} from './ogma/ogma.component';
import {WatermarkComponent} from './watermark/watermark.component';

@NgModule({
    declarations: [
        CoinTreeComponent,
        CoverComponent,
        GlobalSocialNetwork1Component,
        GlobalSocialNetwork2Component,
        GlobalSocialNetwork3Component,
        GreenArrowsComponent,
        Network1Component,
        Network2Component,
        Network3Component,
        OgmaComponent,
        WatermarkComponent,
    ],
    imports: [CommonModule],
    exports: [
        CoinTreeComponent,
        CoverComponent,
        GlobalSocialNetwork1Component,
        GlobalSocialNetwork2Component,
        GlobalSocialNetwork3Component,
        GreenArrowsComponent,
        Network1Component,
        Network2Component,
        Network3Component,
        OgmaComponent,
        WatermarkComponent,
    ],
})
export class IllustrationsModule {}
