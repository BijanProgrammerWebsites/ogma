import {Component, HostListener, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-slideshow',
    templateUrl: './slideshow.component.html',
    styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnDestroy {
    public slideIndex: number = 1;

    private subscriptions: Subscription[] = [];

    public constructor(private route: ActivatedRoute, private router: Router) {
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

    @HostListener('window:keydown', ['$event'])
    public async onKeyDown(event: KeyboardEvent): Promise<void> {
        console.log(event);
        console.log(event.key);

        if (event.key === 'ArrowRight') await this.changeSlide(this.slideIndex + 1);
        else if (event.key === 'ArrowLeft') await this.changeSlide(this.slideIndex - 1);
        else if (event.key === 'Escape') await this.router.navigateByUrl('/');
    }

    private async changeSlide(index: number): Promise<void> {
        await this.router.navigateByUrl(`slideshow/${index}`);
        this.slideIndex = index;
    }
}
