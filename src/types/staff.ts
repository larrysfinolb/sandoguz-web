export enum EDepartment {
  Directivo = "directivo",
  Docente = "docente",
  Administrativo = "administrativo",
  Obrero = "obrero",
}

export interface IStaff {
  id: number,
  name: string,
  position: string,
  department: EDepartment,
  education: string,
  email: string,
  phone: string,
  image: string,
}