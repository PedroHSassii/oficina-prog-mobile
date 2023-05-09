import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class TipoServicosService {
    private tiposServicos = [
    {id:1 , nome: 'Alinhamento', valor: 12.34},
    {id:2 , nome: 'Balanceamento', valor: 56.78},
    {id:3 , nome: 'Revisão de Freios', valor: 90.12},
    {id:4 , nome: 'Suspensão', valor: 34.56}
  ]
  constructor() {}

  getById (id : number) {
    const tipoServicoSelecionado = this.tiposServicos.filter(tipoServico => tipoServico.id === id);
    return tipoServicoSelecionado[0]
  }
}

    