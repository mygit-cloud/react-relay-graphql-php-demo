export class Project {
  public "@id"?: string;

  constructor(
    _id?: string,
    public content?: string,
    public leader?: string,
    public startDate?: Date,
    public engineer?: string
  ) {
    this["@id"] = _id;
  }
}
