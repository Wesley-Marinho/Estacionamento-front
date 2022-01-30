import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './components/views/home/home.component';
import { PessoaReadComponent } from './components/views/pessoa/pessoa-read/pessoa-read.component';
import { VeiculoReadComponent } from './components/views/veiculo/veiculo-read/veiculo-read.component';
import { RotativoReadComponent } from './components/views/rotativo/rotativo-read/rotativo-read.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { PessoaCreateComponent } from './components/views/pessoa/pessoa-create/pessoa-create.component';
import { RotativoCreateComponent } from './components/views/rotativo/rotativo-create/rotativo-create.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PessoaDeleteComponent } from './components/views/pessoa/pessoa-delete/pessoa-delete.component';
import { VeiculoDeleteComponent } from './components/views/veiculo/veiculo-delete/veiculo-delete.component';
import { RotativoDeleteComponent } from './components/views/rotativo/rotativo-delete/rotativo-delete.component';
import { PessoaUpdateComponent } from './components/views/pessoa/pessoa-update/pessoa-update.component';
import { VeiculoUpdateComponent } from './components/views/veiculo/veiculo-update/veiculo-update.component';
import { RotativoUpdateComponent } from './components/views/rotativo/rotativo-update/rotativo-update.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { VeiculoReadPessoaComponent } from './components/views/veiculo/veiculo-read-pessoa/veiculo-read-pessoa.component';
import { VeiculoReadRotativoComponent } from './components/views/veiculo/veiculo-read-rotativo/veiculo-read-rotativo.component';

import { VeiculoCreatePessoaComponent } from './components/views/veiculo/veiculo-create-pessoa/veiculo-create-pessoa.component';
import { VeiculoUpdateRotativoComponent } from './components/views/veiculo/veiculo-update-rotativo/veiculo-update-rotativo.component';
import { VeiculoDeleteRotativoComponent } from './components/views/veiculo/veiculo-delete-rotativo/veiculo-delete-rotativo.component';
import { VeiculoBindRotativoComponent } from './components/views/veiculo/veiculo-bind-rotativo/veiculo-bind-rotativo.component';
import { VeiculoReadBindComponent } from './components/views/veiculo/veiculo-read-bind/veiculo-read-bind.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    PessoaReadComponent,
    VeiculoReadComponent,
    RotativoReadComponent,
    PessoaCreateComponent,
  
    RotativoCreateComponent,
    PessoaDeleteComponent,
    VeiculoDeleteComponent,
    RotativoDeleteComponent,
    PessoaUpdateComponent,
    VeiculoUpdateComponent,
    RotativoUpdateComponent,
    VeiculoReadPessoaComponent,
    VeiculoReadRotativoComponent,
    VeiculoCreatePessoaComponent,
    VeiculoUpdateRotativoComponent,
    VeiculoDeleteRotativoComponent,
    VeiculoBindRotativoComponent,
    VeiculoReadBindComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
