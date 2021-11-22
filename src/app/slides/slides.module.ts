import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoverComponent} from './cover/cover.component';
import {TableOfContentsComponent} from './table-of-contents/table-of-contents.component';
import {PipesModule} from '../pipes/pipes.module';
import {ChapterStartComponent} from './chapter-start/chapter-start.component';

@NgModule({
    declarations: [CoverComponent, TableOfContentsComponent, ChapterStartComponent],
    exports: [CoverComponent, TableOfContentsComponent, ChapterStartComponent],
    imports: [CommonModule, PipesModule],
})
export class SlidesModule {}
