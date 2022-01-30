import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from '../veiculo.model';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-veiculo-update-rotativo',
  templateUrl: './veiculo-update-rotativo.component.html',
  styleUrls: ['./veiculo-update-rotativo.component.css']
})
export class VeiculoUpdateRotativoComponent implements OnInit {
 
  id_rotativo = ''
  

  veiculo: Veiculo ={
    id:'',
    placa: '',
    cor: '',
    modelo: '',
    estacionado: false
  }

  constructor(private service: VeiculoService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id_rotativo = this.route.snapshot.paramMap.get('id_rotativo')!
    this.veiculo.id = this.route.snapshot.paramMap.get('id_veiculo')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.veiculo.id!).subscribe((res) => {
      this.veiculo = res
    })
  }

  updateByRotativo(){
    this.service.updateByRotativo(this.veiculo,this.id_rotativo).subscribe((res) => {
      this.router.navigate(['rotativos'])
      this.service.mensagem('Veiculo atualizado com sucesso')
    }, err => {
      this.service.mensagem('Validar se todos os campos estão preenchidos corretamente')
    })
  }

  cancel(): void {
    this.router.navigate(['rotativos'])
  }
}
