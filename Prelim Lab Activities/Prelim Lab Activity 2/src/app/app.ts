import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Personalprofile } from './personalprofile/personalprofile';
import { Skills } from "./skills/skills";
import { Proficiencies } from "./proficiencies/proficiencies"
import { Footer } from "./footer/footer";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Skills, Footer, Proficiencies, Personalprofile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-app');
}
