import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  message: string = '';

  handleClick(): void {
    this.message = 'Button clicked!';
  }
}