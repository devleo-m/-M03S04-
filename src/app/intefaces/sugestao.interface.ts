export interface SugestaoInterface {
  id: number;
  titulo: string;
  descricao: string;
  dataEnvio: Date;
  dataAtualizacao: Date;
  comentarios: ComentarioInterface[];
}

export interface ComentarioInterface {
  id: number;
  texto: string;
  dataEnvio: Date;
}
