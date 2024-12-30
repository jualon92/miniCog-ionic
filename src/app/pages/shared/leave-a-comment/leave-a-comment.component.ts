import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonModal } from '@ionic/angular/standalone';
import { TranslocoService } from '@jsverse/transloco';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { catchError, Observable, of } from 'rxjs';
import { StorageService } from 'src/storage/storage.service';
import { HomeService } from '../../home/home.service';
import { TranslocoRootModule } from 'src/app/transloco-root.module';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-leave-a-comment',
  templateUrl: './leave-a-comment.component.html',
  styleUrls: ['./leave-a-comment.component.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, ToastModule, MessagesModule, TranslocoRootModule]
})
export class LeaveACommentComponent  {
  @ViewChild("modal") modal!: IonModal;
  feedback = '';
  isError = false;
  isSuccess = false;
  errorMessage = '';
  successMessage = '';
  loading = false;
  constructor(
    private homeService: HomeService,
    private cdr: ChangeDetectorRef,
  ) {}

 
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
 
    this.loading = true;
    this.homeService
      .saveFeedback(this.feedback)
      .pipe(catchError((err) => this.showSendFeedbackNotification(err)))
      .subscribe((response) => {
        console.log(response);
        // if response has error shape, exit
        if (response?.status) return; 
      
        this.isSuccess = true;
        this.successMessage = 'Comentario guardado';
        this.cdr.markForCheck();
        this.loading = false
        
     
         this.feedback = '';
         this.modal.dismiss(this.feedback, 'confirm');
       
        
        
      
      });
  }

  onWillDismiss(event: Event) {
    
  }

  showSendFeedbackNotification(err: any): Observable<any> {
   
    this.errorMessage = 
      err.status === 503
        ? 'Has excedido el límite de intentos. Por favor, intenta mas tarde.'
        : 'Error al guardar el comentario';
    this.isError = true;
    this.cdr.markForCheck();
    this.loading = false
    return of(err);
  }

  learnMore() {}
}
