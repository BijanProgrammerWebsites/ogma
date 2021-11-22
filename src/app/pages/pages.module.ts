import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GalleryComponent} from './gallery/gallery.component';
import {SlideshowComponent} from './slideshow/slideshow.component';
import {SlidesModule} from '../slides/slides.module';

@NgModule({
    declarations: [GalleryComponent, SlideshowComponent],
    imports: [CommonModule, SlidesModule],
})
export class PagesModule {}
