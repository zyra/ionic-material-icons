import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
    selector: 'ion-icon[md-name]'
})
export class MaterialIcon {

    @Input('md-name')
    set mdName(val: string) {
        this.el.nativeElement.innerHTML = val;
    }

    constructor(
        private el: ElementRef
    ) {}

}
