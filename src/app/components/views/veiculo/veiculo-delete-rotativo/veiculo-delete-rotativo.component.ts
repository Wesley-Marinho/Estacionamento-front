import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from '../veiculo.model';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-veiculo-delete-rotativo',
  templateUrl: './veiculo-delete-rotativo.component.html',
  styleUrls: ['./veiculo-delete-rotativo.component.css']
})
export class VeiculoDeleteRotativoComponent implements OnInit {

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

  delete(): void{
    this.service.delete(this.veiculo.id!).subscribe((res) => {
      this.router.navigate([`rotativos/${this.id_rotativo}/veiculos`])
      this.service.mensagem('Veiculo apagado com sucesso')
    }, err =>{
      this.service.mensagem(err.error.error)
    })
  }

  cancel(): void {
    this.router.navigate([`rotativos/${this.id_rotativo}/veiculos`])
  }
}
