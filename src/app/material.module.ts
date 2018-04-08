import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule,MatToolbarModule,MatMenuModule,MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';

@NgModule({
    declarations: [
     ],
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatInputModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatInputModule
    ]
  
  })
  export class MaterialModule {}
  