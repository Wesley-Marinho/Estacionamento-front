import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '../pessoa.model';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-update',
  templateUrl: './pessoa-update.component.html',
  styleUrls: ['./pessoa-update.component.css']
})
export class PessoaUpdateComponent implements OnInit {

 pessoa: Pessoa = {
   id:'',
   nome:'',
   telefone:''
 } 

  constructor(private service: PessoaService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.pessoa.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.pessoa.id!).subscribe((res) => {
      this.pessoa = res
    })
  }

  update(){
    this.service.update(this.pessoa).subscribe((res) => {
      this.router.navigate(['pessoas'])
      this.service.mensagem('Cliente atualizado com sucesso')
    }, err => {
      this.service.mensagem('Validar se todos os campos estão preenchidos corretamente')
    })
  }

  cancel(): void {
    this.router.navigate(['pessoas'])
  }
}
