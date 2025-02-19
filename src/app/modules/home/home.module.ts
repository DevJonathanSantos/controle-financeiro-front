import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { HomeService } from './home.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, DialogModule, TableModule],
  exports: [HomeComponent],
  providers: [HomeService],
})
export class HomeModule {}
