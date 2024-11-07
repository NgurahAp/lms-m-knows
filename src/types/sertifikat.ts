export interface Sertifikat {
  code: number;
  status: string;
  message: string;
  certificates: Certificate[];
}

interface Certificate {
  certificates: unknown[];
}

