import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Veiculo } from "../veiculo.model";
import { VeiculoService } from "../veiculo.service";

@Component({
  selector: "app-veiculo-read",
  templateUrl: "./veiculo-read.component.html",
  styleUrls: ["./veiculo-read.component.css"],
})
export class VeiculoReadComponent implements OnInit {
  veiculos: Veiculo[] = [];

  displayedColumns: string[] = [
    "id",
    "modelo",
    "placa",
    "cor",
    "estacionado",
  ];

  constructor(private service: VeiculoService, private router: Router) {}

  ngOnInit(): void {
    this.findByEstacionado();
  }

  findAll() {
    this.service.findAll().subscribe(res => {
      console.log(res)
      this.veiculos = res;
    })
  }

  findByEstacionado(){
    this.service.findByEstacionado().subscribe(res => {
      console.log(res)
      this.veiculos = res
    })
  }

}
