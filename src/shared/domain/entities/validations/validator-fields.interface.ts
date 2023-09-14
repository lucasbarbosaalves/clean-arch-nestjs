export type FieldsErros = {
  [field: string]: string[];
};

export interface ValidatorFieldsInterface<PropsValidated> {
  errors: FieldsErros; // erros gerados
  validatedData: PropsValidated; // dados validados
  validate(data: any): boolean; // método de validação
}
