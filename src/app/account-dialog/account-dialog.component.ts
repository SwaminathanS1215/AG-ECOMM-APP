import { Component, OnInit, DestroyRef } from '@angular/core';
import { ActivatedRoute, Data, ParamMap, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-account-dialog',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './account-dialog.component.html',
  styleUrl: './account-dialog.component.css'
})
export class AccountDialogComponent implements OnInit {
  modalHeader: string;

  constructor(private activatedRoute: ActivatedRoute, private destroyRef: DestroyRef){
    this.modalHeader = '';
  }

  ngOnInit(): void {
    const subscription = this.activatedRoute.data.subscribe({
      next: (pageData: Data) => {
        this.modalHeader = pageData['title'] || '';
      }
    });

    this.destroyRef.onDestroy(() => subscription.unsubscribe());
  }
}
