import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoverComponent} from './cover/cover.component';
import {TableOfContentsComponent} from './table-of-contents/table-of-contents.component';
import {PipesModule} from '../pipes/pipes.module';

@NgModule({
    declarations: [CoverComponent, TableOfContentsComponent],
    exports: [CoverComponent, TableOfContentsComponent],
    imports: [CommonModule, PipesModule],
})
export class SlidesModule {}
