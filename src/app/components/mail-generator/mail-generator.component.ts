import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail-generator',
  templateUrl: './mail-generator.component.html',
  styleUrls: ['./mail-generator.component.scss']
})
export class MailGeneratorComponent implements OnInit {

  titulo : string = '';
  texto : string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
