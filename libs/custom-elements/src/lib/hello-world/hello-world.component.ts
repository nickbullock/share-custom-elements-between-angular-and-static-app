import { Component, Input } from '@angular/core';

@Component({
  selector: 'simple-nx-workspace-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent {
  @Input() input: string
}
