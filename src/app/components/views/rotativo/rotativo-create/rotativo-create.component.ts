import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Rotativo } from "../rotativo.model";
import { RotativoService } from "../rotativo.service";

@Component({
  selector: "app-rotativo-create",
  templateUrl: "./rotativo-create.component.html",
  styleUrls: ["./rotativo-create.component.css"],
})
export class RotativoCreateComponent implements OnInit {
  constructor(private service: RotativoService, private router: Router) {}

  rotativo: Rotativo ={
    dataEntrada: '',
    dataSaida: '',
  }

  ngOnInit(): void {}

  create() {
    this.service.create(this.rotativo).subscribe((res) =>{
      this.router.navigate(['rotativos'])
      this.service.mensagem('Rotativo salvo com sucesso.');
    }, err => {
      for(let i=0; i<err.error.errors.length; i++){
        this.service.mensagem(err.error.errors[i].message)
      }
    })
  }

  cancel(): void {
    this.router.navigate(['rotativos'])
  }
}
