import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

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

  createPDF(){

    const pdfDefinition: any = {
      content: [
        {
          text: this.titulo + '\n' + '\n' + this.texto,
        }
      ]
    }

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();

  }

}
