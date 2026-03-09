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

  btnCheck = signal(true);

  pisuClick() : void {

    this.btnCheck.set(true);

    setTimeout(() => {      
      this.btnCheck.set(false);
    }, 3000 );
  }

}
