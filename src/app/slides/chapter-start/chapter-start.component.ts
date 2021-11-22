import {Component, Input} from '@angular/core';

type VerticalPosition = 'top' | 'center' | 'bottom';
type HorizontalPosition = 'left' | 'center' | 'right';

@Component({
    selector: 'slide-chapter-start',
    templateUrl: './chapter-start.component.html',
    styleUrls: ['./chapter-start.component.scss'],
})
export class ChapterStartComponent {
    @Input() public index!: number;
    @Input() public heading!: string;
    @Input() public verticalPosition: VerticalPosition = 'center';
    @Input() public horizontalPosition: HorizontalPosition = 'center';
}
