import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rotativo } from '../rotativo.model';
import { RotativoService } from '../rotativo.service';

@Component({
  selector: 'app-rotativo-read',
  templateUrl: './rotativo-read.component.html',
  styleUrls: ['./rotativo-read.component.css']
})
export class RotativoReadComponent implements OnInit {

  rotativos: Rotativo[] = []

  displayedColumns: string[] = ['id', 'dataEntrada', 'dataSaida', 'veiculos', 'bind', 'acoes'];

  constructor(private service: RotativoService, private router: Router) { }

  ngOnInit(): void {
    this.findAll()
  }
 
  findAll() {
    this.service.findAll().subscribe(res => {
      this.rotativos = res;
    })
  }

  navegarParaRotativoCreate() {
    this.router.navigate(["rotativos/create"])
  }

}
