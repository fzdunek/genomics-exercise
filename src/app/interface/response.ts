export interface Response {
  laboatoria: Array<Labs>;
  cords: {
    min_lat: number;
    min_lng: number;
    max_lat: number;
    max_lng: number;
    avg_lat: number;
    avg_lng: number;
    zoom: number;
  };
}

export interface Labs {
  id: number;
  nazwa: string;
  adres: string;
  kod_pocztowy: string;
  miejscowosc: string;
  tel: string;
  gps_lat: number;
  gps_lng: number;
  info: string;
}
