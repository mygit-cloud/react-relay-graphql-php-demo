export class Engineer {
  public "@id"?: string;

  constructor(
    _id?: string,
    public name?: string,
    public department?: string,
    public projects?: string[]
  ) {
    this["@id"] = _id;
  }
}
