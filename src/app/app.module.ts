import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {IconsModule} from './icons/icons.module';
import {IllustrationsModule} from './illustrations/illustrations.module';
import {PagesModule} from './pages/pages.module';
import {SlidesModule} from './slides/slides.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, IconsModule, IllustrationsModule, PagesModule, SlidesModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
