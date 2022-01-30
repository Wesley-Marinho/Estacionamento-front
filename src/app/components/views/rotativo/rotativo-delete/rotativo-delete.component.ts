import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Rotativo } from "../rotativo.model";
import { RotativoService } from "../rotativo.service";

@Component({
  selector: "app-rotativo-delete",
  templateUrl: "./rotativo-delete.component.html",
  styleUrls: ["./rotativo-delete.component.css"],
})
export class RotativoDeleteComponent implements OnInit {

  rotativo: Rotativo = {
    id:'',
    dataEntrada:'',
    dataSaida:''
  }

  constructor(private service: RotativoService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.rotativo.id = this.route.snapshot.paramMap.get('id')!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.rotativo.id!).subscribe((res) => {
      this.rotativo = res
    })
  }

  delete(): void{
    this.service.delete(this.rotativo.id!).subscribe((res) => {
      this.router.navigate(['rotativos'])
      this.service.mensagem('Rotarivo deletado com sucesso')
    }, err =>{
      this.service.mensagem(err.error.error)
    })
  }

  cancel(): void {
    this.router.navigate(['rotativos'])
  }
}
