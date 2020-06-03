import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListsComponent } from './content/lists/lists.component';
import { TasksComponent } from './content/tasks/tasks.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { TaskButtonsComponent } from './content/tasks/task-buttons/task-buttons.component';
import { FormListTaskComponent } from './content/form-list-task/form-list-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
    TasksComponent,
    HeaderComponent,
    ContentComponent,
    TaskButtonsComponent,
    FormListTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
