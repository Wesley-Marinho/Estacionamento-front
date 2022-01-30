import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from '../veiculo.model';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-veiculo-read-rotativo',
  templateUrl: './veiculo-read-rotativo.component.html',
  styleUrls: ['./veiculo-read-rotativo.component.css']
})
export class VeiculoReadRotativoComponent implements OnInit {
  veiculos: Veiculo[] = [];

  id_rotativo = ''

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
    this.id_rotativo = this.route.snapshot.paramMap.get('id_rotativo')!
    this.findByRotativo()
  }

  findByNaoEstacionado(){
    this.service.findByNaoEstacionado().subscribe(res => {
      console.log(res)
      this.veiculos = res
    })
  }

  findByRotativo(){
    this.service.findByRotativo(this.id_rotativo).subscribe(res => {
      console.log(res)
      this.veiculos = res
    })
  }

  navegarParaVeiculoCreate(): void{
    this.router.navigate([`rotativos/${this.id_rotativo}/veiculos/create`]);
  }
}
