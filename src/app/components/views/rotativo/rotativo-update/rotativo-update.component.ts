import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Rotativo } from "../rotativo.model";
import { RotativoService } from "../rotativo.service";

@Component({
  selector: "app-rotativo-update",
  templateUrl: "./rotativo-update.component.html",
  styleUrls: ["./rotativo-update.component.css"],
})
export class RotativoUpdateComponent implements OnInit {
  rotativo: Rotativo = {
    id: "",
    dataEntrada: "",
    dataSaida: "",
  };

  constructor(
    private service: RotativoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.rotativo.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.rotativo.id!).subscribe((res) => {
      this.rotativo = res;
    });
  }

  update() {
    this.service.update(this.rotativo).subscribe(
      (res) => {
        this.router.navigate(["rotativos"]);
        this.service.mensagem("Rotativo atualizado com sucesso");
      },
      (err) => {
        this.service.mensagem(
          "Validar se todos os campos estão preenchidos corretamente"
        );
      }
    );
  }

  cancel(): void {
    this.router.navigate(["rotativos"]);
  }
}
