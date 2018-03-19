import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { WorkComponent } from './work/work.component';
import { WorkDetailsComponent } from './work-details/work-details.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date.pipe';
import { WorkFormComponent } from './work-form/work-form.component';


@NgModule({
  declarations: [
    AppComponent,
    WorkComponent,
    WorkDetailsComponent,
    StrikethroughDirective,
    DateCountPipe,
    WorkFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
