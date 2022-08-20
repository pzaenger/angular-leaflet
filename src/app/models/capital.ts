export interface Capital {
  readonly name: string;
  readonly country: string;
  readonly latitude: number;
  readonly longitude: number;
  readonly code: string | undefined;
  readonly continent: string;
}
