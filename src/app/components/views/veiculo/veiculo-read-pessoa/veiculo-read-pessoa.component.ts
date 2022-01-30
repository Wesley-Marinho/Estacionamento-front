import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Veiculo } from "../veiculo.model";
import { VeiculoService } from "../veiculo.service";

@Component({
  selector: "app-veiculo-read",
  templateUrl: "./veiculo-read-pessoa.component.html",
  styleUrls: ["./veiculo-read-pessoa.component.css"],
})
export class VeiculoReadPessoaComponent implements OnInit {
  veiculos: Veiculo[] = [];

  id_pessoa = ''

  displayedColumns: string[] = [
    "id",
    "modelo",
    "placa",
    "cor",
    "estacionado",
    "acoes"
  ];

  constructor(private service: VeiculoService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id_pessoa = this.route.snapshot.paramMap.get('id_pessoa')!
    this.findByPessoa()
  }

  findAll() {
    this.service.findAll().subscribe(res => {
      console.log(res)
      this.veiculos = res;
    })
  }

  findByPessoa(){
    this.service.findByPessoa(this.id_pessoa).subscribe(res => {
      console.log(res)
      this.veiculos = res
    })
  }

  navegarParaVeiculoCreate(): void{
    this.router.navigate([`pessoas/${this.id_pessoa}/veiculos/create`]);
  }
}
