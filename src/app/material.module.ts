import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule,MatToolbarModule,MatMenuModule,MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
    declarations: [
     ],
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatInputModule,
        MatGridListModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatInputModule,
        MatGridListModule
    ]
  
  })
  export class MaterialModule {}
  