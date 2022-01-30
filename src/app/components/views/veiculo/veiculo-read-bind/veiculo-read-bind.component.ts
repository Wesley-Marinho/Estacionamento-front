import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veiculo } from '../veiculo.model';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-veiculo-read-bind',
  templateUrl: './veiculo-read-bind.component.html',
  styleUrls: ['./veiculo-read-bind.component.css']
})
export class VeiculoReadBindComponent implements OnInit {
  veiculos: Veiculo[] = [];

  displayedColumns: string[] = [
    "id",
    "modelo",
    "placa",
    "cor",
    "estacionado",
    "acoes"
  ];

  constructor(private service: VeiculoService, private router: Router) {}

  ngOnInit(): void {
    this.findByNaoEstacionado();
  }

  findAll() {
    this.service.findAll().subscribe(res => {
      console.log(res)
      this.veiculos = res;
    })
  }

  findByNaoEstacionado(){
    this.service.findByNaoEstacionado().subscribe(res => {
      console.log(res)
      this.veiculos = res
    })
  }

  navegarParaVeiculoCreate() {
    this.router.navigate(["veiculos/create"]);
  }
}
