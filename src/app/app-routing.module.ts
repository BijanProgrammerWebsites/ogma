import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GalleryComponent} from './pages/gallery/gallery.component';
import {SlideshowComponent} from './pages/slideshow/slideshow.component';

const routes: Routes = [
    {path: '', component: GalleryComponent},
    {path: 'slideshow', redirectTo: 'slideshow/1'},
    {path: 'slideshow/:index', component: SlideshowComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
