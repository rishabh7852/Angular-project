import { Component, Input, OnInit } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [NgbRatingModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent implements OnInit {
      
    
     @Input() rating: any;
     @Input() isReadonly: boolean = false;

     

     constructor(){ }
     ngOnInit(): void {
       
     }

    ariaValueText(current: number, max: number) {
      return `${current} out of ${max} hearts`;
      }
}
