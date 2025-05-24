import { get } from '../apiClient';

export const fetchActuacionesByProcesoId = async (procesoId: string) => {
  const url = `https://consultaprocesos.ramajudicial.gov.co:448/api/v2/Proceso/Actuaciones/${procesoId}`;
  const response = await get(url);
  return response.data;
};
