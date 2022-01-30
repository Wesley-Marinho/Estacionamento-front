import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Pessoa } from "../pessoa.model";
import { PessoaService } from "../pessoa.service";

@Component({
  selector: "app-pessoa-delete",
  templateUrl: "./pessoa-delete.component.html",
  styleUrls: ["./pessoa-delete.component.css"],
})
export class PessoaDeleteComponent implements OnInit {

  pessoa: Pessoa = {
    id:'',
    nome:'',
    telefone:''
  }

  constructor(private service: PessoaService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.pessoa.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.pessoa.id!).subscribe((res) => {
      this.pessoa = res
    })
  }

  delete(): void{
    this.service.delete(this.pessoa.id!).subscribe((res) => {
      this.router.navigate(['pessoas'])
      this.service.mensagem('Cliente apagado com sucesso')
    }, err =>{
      this.service.mensagem(err.error.error)
    })
  }

  cancel(): void {
    this.router.navigate(['pessoas'])
  }
}
