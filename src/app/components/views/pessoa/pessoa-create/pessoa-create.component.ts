import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Pessoa } from "../pessoa.model";
import { PessoaService } from "../pessoa.service";

@Component({
  selector: "app-pessoa-create",
  templateUrl: "./pessoa-create.component.html",
  styleUrls: ["./pessoa-create.component.css"],
})
export class PessoaCreateComponent implements OnInit {
  constructor(private service: PessoaService, private router: Router) {}

  pessoa: Pessoa ={
    nome: '',
    telefone: '',
  }

  ngOnInit(): void {}

  create() {
    this.service.create(this.pessoa).subscribe((res) =>{
      this.router.navigate(['pessoas'])
      this.service.mensagem('Cliente salvo com sucesso.');
    }, err => {
      for(let i=0; i<err.error.errors.length; i++){
        this.service.mensagem(err.error.errors[i].message)
      }
    })
  }

  cancel(): void {
    this.router.navigate(['pessoas'])
  }
}
