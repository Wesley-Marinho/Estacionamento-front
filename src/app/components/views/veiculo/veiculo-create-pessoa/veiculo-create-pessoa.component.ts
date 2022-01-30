import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Veiculo } from "../veiculo.model";
import { VeiculoService } from "../veiculo.service";

@Component({
  selector: "app-veiculo-create",
  templateUrl: "./veiculo-create-pessoa.component.html",
  styleUrls: ["./veiculo-create-pessoa.component.css"],
})
export class VeiculoCreatePessoaComponent implements OnInit {

  id_pessoa = ''

  veiculo: Veiculo ={
    placa: '',
    cor: '',
    modelo: '',
    estacionado: false
  }

  constructor(private service: VeiculoService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id_pessoa = this.route.snapshot.paramMap.get('id_pessoa')!
  }

  create(): void{
    this.service.create(this.veiculo,this.id_pessoa).subscribe(res => {
      this.router.navigate(['pessoas'])
      this.service.mensagem('Veiculo salvo com sucesso.');
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
