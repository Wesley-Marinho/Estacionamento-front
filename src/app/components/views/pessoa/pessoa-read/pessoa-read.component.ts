import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from '../pessoa.model';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-pessoa-read',
  templateUrl: './pessoa-read.component.html',
  styleUrls: ['./pessoa-read.component.css']
})
export class PessoaReadComponent implements OnInit {

  pessoas: Pessoa[] = []

  displayedColumns: string[] = ['id', 'nome', 'telefone', 'veiculos', 'adicionar', 'acoes'];

  constructor(private service: PessoaService, private router: Router) { }

  ngOnInit(): void {
    this.findAll()
  }
 
  findAll() {
    this.service.findAll().subscribe(res => {
      console.log(res)
      this.pessoas = res;
    })
  }

  navegarParaPessoaCreate() {
    this.router.navigate(["pessoas/create"])
  }  
}
