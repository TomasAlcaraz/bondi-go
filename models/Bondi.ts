export interface InternosActivos {
  id: number;
  type: string;
  geometry: InternosActivosProperties;
  properties: InternosActivosGeometry;
}

interface InternosActivosProperties {
  type: string;
  coordinates: number[];
}

interface InternosActivosGeometry {
  nombre: string;
  linea: string;
  ultima_posicion_time: string;
  recorrido_actual: number;
  recorrido_nombre: string;
  ultimas_velocidades_promedio: string;
  ultimas_variaciones_latitud: string;
  ultimas_variaciones_longitud: string;
  adaptado: boolean;
  piso_bajo: boolean;
  articulado: boolean;
  empresa: number;
  color: string;
}
