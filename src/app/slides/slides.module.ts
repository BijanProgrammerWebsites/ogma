import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoverComponent} from './cover/cover.component';
import {TableOfContentsComponent} from './table-of-contents/table-of-contents.component';

@NgModule({
    declarations: [CoverComponent, TableOfContentsComponent],
    exports: [CoverComponent, TableOfContentsComponent],
    imports: [CommonModule],
})
export class SlidesModule {}
