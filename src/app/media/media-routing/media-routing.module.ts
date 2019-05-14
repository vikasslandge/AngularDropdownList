import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MediaComponent } from '../media.component';
import { FavouriteComponent } from '../favourite/favourite.component';
import { RecommendedComponent } from '../recommended/recommended.component';

const routes:Routes=[
  {path:"AllVideos",component:MediaComponent},
  {path:"Favourite",component:FavouriteComponent},
  {path:"Recommended",component:RecommendedComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[ ]
})
export class MediaRoutingModule { }
