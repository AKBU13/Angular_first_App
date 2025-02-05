import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'First-App';
}
