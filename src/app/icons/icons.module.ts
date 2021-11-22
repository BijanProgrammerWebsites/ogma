import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {KharazmiComponent} from './kharazmi/kharazmi.component';

@NgModule({
    declarations: [KharazmiComponent],
    imports: [CommonModule],
    exports: [KharazmiComponent],
})
export class IconsModule {}
