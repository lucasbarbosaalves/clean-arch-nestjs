import { UserDataBuilder } from "@/users/domain/entities/testing/helpers/user-data-builder";
import { UserEntity, UserProps } from "@/users/domain/entities/user.entity";
import { validate as uuidValidate } from "uuid";
import { Entity } from "../../entity";

type StubProps = {
  prop1: string;
  prop2: number;
}

class StubEntity extends Entity<StubProps> {

}
describe('Entity unit tests', () => {

  it('Should set props and id', () => {
    const props = { prop1: 'prop1', prop2: 2 };
    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity._id).not.toBeNull();
    expect(uuidValidate(entity._id)).toBeTruthy(); // verifica se é um uuid válido
  })

  it('Should accept a valid uuid', () => {
    const props = { prop1: 'prop1', prop2: 2 };
    const id = 'ac429c69-b548-4bd1-bb70-a0b5bb7f3034';
    const entity = new StubEntity(props, id);

    expect(uuidValidate(entity._id)).toBeTruthy(); // verifica se é um uuid válido
    expect(entity._id).toEqual(id);
  })

  it('Should convert a entity to a Javascript Object', () => {
    const props = { prop1: 'prop1', prop2: 2 };
    const id = 'ac429c69-b548-4bd1-bb70-a0b5bb7f3034';
    const entity = new StubEntity(props, id);

    expect(entity.toJson()).toStrictEqual({
      id,
      ...props
    });
  });
})


