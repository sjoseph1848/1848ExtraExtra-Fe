import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ArticlesComponent } from './articles/articles.component';
import { ShowcardComponent } from './showcard/showcard.component';
import { PollsTableComponent } from './polls-table/polls-table.component';



@NgModule({
  declarations: [ShowcaseComponent, ArticlesComponent, ShowcardComponent, PollsTableComponent],
  imports: [
    CommonModule
  ],
  exports: [ShowcaseComponent,ArticlesComponent, ShowcardComponent, PollsTableComponent]
})
export class SharedModule { }
