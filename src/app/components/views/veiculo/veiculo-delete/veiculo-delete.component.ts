import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from '../veiculo.model';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-veiculo-delete',
  templateUrl: './veiculo-delete.component.html',
  styleUrls: ['./veiculo-delete.component.css']
})
export class VeiculoDeleteComponent implements OnInit {

  id_pessoa = ''
  

  veiculo: Veiculo ={
    id:'',
    placa: '',
    cor: '',
    modelo: '',
    estacionado: false
  }

  constructor(private service: VeiculoService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id_pessoa = this.route.snapshot.paramMap.get('id_pessoa')!
    this.veiculo.id = this.route.snapshot.paramMap.get('id_veiculo')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.veiculo.id!).subscribe((res) => {
      this.veiculo = res
    })
  }

  delete(): void{
    this.service.delete(this.veiculo.id!).subscribe((res) => {
      this.router.navigate([`pessoas`])
      this.service.mensagem('Veiculo apagado com sucesso')
    }, err =>{
      this.service.mensagem(err.error.error)
    })
  }

  cancel(): void {
    this.router.navigate([`pessoas/${this.id_pessoa}/veiculos`])
  }
}
