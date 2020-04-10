import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .hidden {
      visibility: hidden;
    }
    .greater {
      color: white;
    }
  `]
})
export class AppComponent {
  visible = true;
  clicked = false
  countArray = []
  count = 0

  changeVisibility() {
    this.visible = !this.visible;
    //this.countArray.push(this.countArray.length + 1)
    this.countArray.push(new Date())
  }

  getColor(){
    return this.count >= 5 ? "blue" : null
  }


}
