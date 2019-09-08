import { LayoutModule } from "@angular/cdk/layout";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { CategoryPanelComponent } from "./category-panel/category-panel.component";
import { ProfileCardComponent } from "./profile-card/profile-card.component";
import { SelectPersonDialogComponent } from "./select-person-dialog/select-person-dialog.component";


@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    CategoryPanelComponent,
    SelectPersonDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatDialogModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SelectPersonDialogComponent]
})
export class AppModule {}
