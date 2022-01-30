import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { PessoaCreateComponent } from './components/views/pessoa/pessoa-create/pessoa-create.component';
import { PessoaDeleteComponent } from './components/views/pessoa/pessoa-delete/pessoa-delete.component';
import { PessoaReadComponent } from './components/views/pessoa/pessoa-read/pessoa-read.component';
import { PessoaUpdateComponent } from './components/views/pessoa/pessoa-update/pessoa-update.component';
import { RotativoCreateComponent } from './components/views/rotativo/rotativo-create/rotativo-create.component';
import { RotativoDeleteComponent } from './components/views/rotativo/rotativo-delete/rotativo-delete.component';
import { RotativoReadComponent } from './components/views/rotativo/rotativo-read/rotativo-read.component';
import { RotativoUpdateComponent } from './components/views/rotativo/rotativo-update/rotativo-update.component';
import { VeiculoBindRotativoComponent } from './components/views/veiculo/veiculo-bind-rotativo/veiculo-bind-rotativo.component';
import { VeiculoCreatePessoaComponent } from './components/views/veiculo/veiculo-create-pessoa/veiculo-create-pessoa.component';
import { VeiculoDeleteRotativoComponent } from './components/views/veiculo/veiculo-delete-rotativo/veiculo-delete-rotativo.component';

import { VeiculoDeleteComponent } from './components/views/veiculo/veiculo-delete/veiculo-delete.component';
import { VeiculoReadBindComponent } from './components/views/veiculo/veiculo-read-bind/veiculo-read-bind.component';
import { VeiculoReadPessoaComponent } from './components/views/veiculo/veiculo-read-pessoa/veiculo-read-pessoa.component';
import { VeiculoReadRotativoComponent } from './components/views/veiculo/veiculo-read-rotativo/veiculo-read-rotativo.component';
import { VeiculoReadComponent } from './components/views/veiculo/veiculo-read/veiculo-read.component';
import { VeiculoUpdateRotativoComponent } from './components/views/veiculo/veiculo-update-rotativo/veiculo-update-rotativo.component';
import { VeiculoUpdateComponent } from './components/views/veiculo/veiculo-update/veiculo-update.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'pessoas',
    component: PessoaReadComponent,
  },
  {
    path:'pessoas/:id_pessoa/veiculos',
    component: VeiculoReadPessoaComponent,
  },
  {
    path:'rotativos/:id_rotativo/veiculos',
    component: VeiculoReadRotativoComponent,
  },

  {
    path:'rotativos/:id_rotativo/bind',
    component: VeiculoReadBindComponent,
  },

  {
    path:'veiculos',
    component: VeiculoReadComponent,
  },

  {
    path:'rotativos',
    component: RotativoReadComponent,
  },

  {
    path:'pessoas/create',
    component: PessoaCreateComponent,
  },
    {
      path:'pessoas/:id_pessoa/veiculos/create',
      component: VeiculoCreatePessoaComponent
    },
  {
    path:'rotativos/create',
    component: RotativoCreateComponent,
  },

  {
    path:'pessoas/delete/:id',
    component: PessoaDeleteComponent,
  },

  {
    path:'pessoas/:id_pessoas/veiculos/:id_veiculo/delete',
    component: VeiculoDeleteComponent,
  },

  {
    path:'rotativos/delete/:id',
    component: RotativoDeleteComponent,
  },

  {
    path:'pessoas/update/:id',
    component: PessoaUpdateComponent,
  },

  {
    path:'rotativos/:id_rotativo/veiculos/delete/:id_veiculo',
    component: VeiculoDeleteRotativoComponent,
  },

  {
    path:'pessoas/:id_pessoa/veiculos/:id_veiculo/update',
    component: VeiculoUpdateComponent,
  },

  {
    path:'rotativos/:id_rotativo/veiculos/update/:id_veiculo',
    component: VeiculoUpdateRotativoComponent,
  },

  {
    path:'rotativos/:id_rotativo/bind/:id_veiculo',
    component: VeiculoBindRotativoComponent,
  },

  {
    path:'rotativos/update/:id',
    component: RotativoUpdateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
