import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('first-project');
  francyperry :string = "Amo Francesco Perrotta";

  btnCheck = false;

  pisuClick() : void {

    this.btnCheck = true;

    setTimeout(() => {      
      this.btnCheck = false;
    }, 3000 );
  }

}

