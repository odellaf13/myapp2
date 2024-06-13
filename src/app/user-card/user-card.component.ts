import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  name = "Óscar"
  apellidos = "Delgado Lafuente"
  age = 31
  married = true
  adress = {
    country : "Spain",
    city: "Sevilla"
  }
  private dni = "23232323Q"
  public nationality = "Espanol"
  
  getDate(){
    return new Date()
  }
}
