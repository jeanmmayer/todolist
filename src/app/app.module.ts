import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListsComponent } from './content/lists/lists.component';
import { TasksComponent } from './content/tasks/tasks.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { TaskButtonsComponent } from './content/tasks/task-buttons/task-buttons.component';
import { NewTaskComponent } from './content/lists/new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AuthInterceptor, ErrorInterceptor } from './_helpers';
import { AuthInterceptor } from './_helpers';
import { NewListComponent } from './content/lists/new-list/new-list.component';


@NgModule({
	declarations: [
		AppComponent,
		ListsComponent,
		TasksComponent,
		HeaderComponent,
		ContentComponent,
		TaskButtonsComponent,
		NewTaskComponent,
		NewListComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
		// { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
