import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TitleComponent } from "./title/title.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AvatarComponent } from "./avatar/avatar.component";
import { BtnComponent } from "./btn/btn.component";
import { IconComponent } from "./icon/icon.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, TitleComponent, HeaderComponent, FooterComponent, AvatarComponent, BtnComponent, IconComponent]
})
export class AppComponent {
  title = 'myapp2';
}
