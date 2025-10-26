import Identity from "./indetity";
export default abstract class Entity<T> {
  private entityId: Identity;
  protected attributes: T;

  protected constructor(attributes: T, id?: Identity) {
    this.entityId = id ?? new Identity();
    this.attributes = attributes;
  }

  get id() {
    return this.entityId;
  }
}
