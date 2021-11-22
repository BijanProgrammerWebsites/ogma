import {Component, ElementRef, HostListener, OnDestroy, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-slideshow',
    templateUrl: './slideshow.component.html',
    styleUrls: ['./slideshow.component.scss'],
})
export class SlideshowComponent implements OnDestroy {
    @ViewChild('slideshow') public slideshow!: ElementRef<HTMLElement>;

    public slideIndex: number = 1;

    public tableOfContents: string[] = ['What is Data Visualization?', 'Age of Big Data', 'Pros & Cons', 'Ogma'];

    private subscriptions: Subscription[] = [];

    public constructor(private route: ActivatedRoute, private router: Router) {
        this.subscriptions.push(
            this.route.params.subscribe((params) => {
                const index = Number.parseInt(params['index']);
                this.slideIndex = isNaN(index) ? 1 : index;
            })
        );
    }

    public get slidesCount(): number {
        return this.slideshow?.nativeElement.childElementCount || 1;
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }

    @HostListener('window:keydown', ['$event'])
    public async onKeyDown(event: KeyboardEvent): Promise<void> {
        console.log(event.key);

        if (event.key === 'ArrowRight') await this.changeSlide(this.slideIndex + 1);
        else if (event.key === 'ArrowLeft') await this.changeSlide(this.slideIndex - 1);
        else if (event.key === 'Escape') await this.router.navigateByUrl('/');
    }

    private async changeSlide(index: number): Promise<void> {
        if (index < 1 || this.slidesCount < index) return;

        await this.router.navigateByUrl(`slideshow/${index}`);
        this.slideIndex = index;
    }
}
