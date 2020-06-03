import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ArticlesComponent } from './articles/articles.component';
import { ShowcardComponent } from './showcard/showcard.component';



@NgModule({
  declarations: [ShowcaseComponent, ArticlesComponent, ShowcardComponent],
  imports: [
    CommonModule
  ],
  exports: [ShowcaseComponent,ArticlesComponent, ShowcardComponent]
})
export class SharedModule { }
