import { Component, ElementRef, OnInit, Renderer2 } from "@angular/core";
import * as confetti from 'canvas-confetti';

@Component({
    selector: 'yes',
    templateUrl: './yes.html',
    styleUrls: ['./../../style/style.scss']
})
  
export class YesComponent implements OnInit {

    constructor(
        private renderer2: Renderer2,
        private elementRef: ElementRef
    ){}

    ngOnInit(): void {
        confetti();
    }

    confetti() {
    const canvas = this.renderer2.createElement('canvas');
 
    this.renderer2.appendChild(this.elementRef.nativeElement, canvas);
 
    const myConfetti = confetti.create(canvas, {
      resize: true // will fit all screen sizes
    });
 
    myConfetti();
    }

}