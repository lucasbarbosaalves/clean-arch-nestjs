export type FieldsErros = {
  [field: string]: string[];
};

export interface ValidatorFieldsInterface<PropsValidated> {
  erros: FieldsErros; // erros gerados
  validatedData: PropsValidated; // dados validados
  validate(data: any): boolean; // método de validação
}
