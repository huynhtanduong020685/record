import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PlayrecordfilePage } from './playrecordfile.page';

const routes: Routes = [
  {
    path: '',
    component: PlayrecordfilePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PlayrecordfilePage]
})
export class PlayrecordfilePageModule {}
