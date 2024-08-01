import { Component } from "@angular/core";
import { AccountDialogComponent } from "../account-dialog/account-dialog.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [AccountDialogComponent]
})
export class HeaderComponent {
    openDialog= false;

    onLoginClick() {
        this.openDialog = true;
    }

    onCloseDialog(){
        this.openDialog = false;
    }
}