import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowcaseComponent } from './showcase/showcase.component';
import { ArticlesComponent } from './articles/articles.component';



@NgModule({
  declarations: [ShowcaseComponent, ArticlesComponent],
  imports: [
    CommonModule
  ],
  exports: [ShowcaseComponent,ArticlesComponent]
})
export class SharedModule { }
