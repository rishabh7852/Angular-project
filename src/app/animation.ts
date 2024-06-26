import { from } from "rxjs";
import{ animate, animateChild,group,query, style, transition, trigger} from "@angular/animations"


export const slideInAnimation = trigger('outerAnimations',[
    transition('homePage <=> aboutPage',[
        style({position: 'relative'}),
        query(':enter,:leave',[
            style({
                position:'absolute',
                top: 0,
                left:0,
                width: '100%'
            })
        ])
    ])
])