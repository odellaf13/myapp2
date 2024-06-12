import { Component } from '@angular/core';
import { LinkComponent } from "../link/link.component";

@Component({
    selector: 'app-btn',
    standalone: true,
    templateUrl: './btn.component.html',
    styleUrl: './btn.component.css',
    imports: [LinkComponent]
})
export class BtnComponent {

}
