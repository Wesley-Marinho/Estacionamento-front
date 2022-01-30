import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from '../veiculo.model';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-veiculo-update',
  templateUrl: './veiculo-update.component.html',
  styleUrls: ['./veiculo-update.component.css']
})
export class VeiculoUpdateComponent implements OnInit {
  
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

  update(){
    this.service.update(this.veiculo).subscribe((res) => {
      this.router.navigate(['pessoas'])
      this.service.mensagem('Veiculo atualizado com sucesso')
    }, err => {
      this.service.mensagem('Validar se todos os campos estão preenchidos corretamente')
    })
  }


  cancel(): void {
    this.router.navigate(['pessoas'])
  }
}
