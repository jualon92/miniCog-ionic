import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { getBrowserLang } from '@jsverse/transloco';
import { TranslocoRootModule } from 'src/app/transloco-root.module';
 
export interface LANGURL{
  en:string;
  es:string;
}
@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss'],
  standalone: true,
  imports: [IonicModule, TranslocoRootModule]
})
export class ReadMoreComponent implements OnInit {
  pdfUrl = "";
  constructor() { }

  private readonly  PDF_URLS : LANGURL  = {
    'es': 'https://mini-cog.com/wp-content/uploads/2022/09/SPANISH-Mini-Cog.pdf',
    'en': 'https://www.alz.org/media/documents/mini-cog.pdf'
  } 

  ngOnInit() {
    //get lang code
     const code = (getBrowserLang() ?? "en") as keyof LANGURL;
 
    this.pdfUrl = this.PDF_URLS[code] 
 
  }

 


}
