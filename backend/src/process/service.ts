import { get } from '../apiClient';

export const fetchProcessByRadicado = async (radicado: string) => {
  const url = `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Procesos/Consulta/NumeroRadicacion?numero=${radicado}`;
  const response = await get(url);

  const procesos = response.data.procesos || [];
  const filtered = procesos.map((p: any) => ({
    idProceso: p.idProceso,
    fechaProceso: p.fechaProceso,
    fechaUltimaActuacion: p.fechaUltimaActuacion,
    despacho: p.despacho,
    departamento: p.departamento,
    sujetosProcesales: p.sujetosProcesales
  }));

  return filtered;
};
