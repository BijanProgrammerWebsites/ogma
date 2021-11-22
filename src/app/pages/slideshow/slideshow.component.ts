import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-slideshow',
    templateUrl: './slideshow.component.html',
    styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnDestroy {
    public slideIndex: number = 1;

    private subscriptions: Subscription[] = [];

    public constructor(private route: ActivatedRoute) {
        this.subscriptions.push(
            this.route.params.subscribe((params) => {
                const index = Number.parseInt(params['index']);
                this.slideIndex = isNaN(index) ? 1 : index;
            })
        );
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }
}
