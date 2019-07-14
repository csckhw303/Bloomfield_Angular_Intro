import { Component, Input, OnChanges, EventEmitter, Output } from "@angular/core";


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5
    }
  @Input() rating : number ;
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  starWidth: number;
  onClick() {
     this.notify.emit("YUou have clicked!!!");
  }
}