import { FunctionComponent } from "react";
import Link from "next/link";
import ReferenceLinks from "../../components/common/ReferenceLinks";
import { Engineer } from "../../types/Engineer";

interface Props {
  engineers: Engineer[];
}

export const List: FunctionComponent<Props> = ({ engineers }) => (
  <div>
    <h1>Engineer List</h1>
    <Link href="/engineers/create">
      <a className="btn btn-primary">Create</a>
    </Link>
    <table className="table table-responsive table-striped table-hover">
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>department</th>
          <th>projects</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {engineers &&
          engineers.length !== 0 &&
          engineers.map((engineer) => (
            <tr key={engineer["@id"]}>
              <th scope="row">
                <ReferenceLinks items={engineer["@id"]} type="engineer" />
              </th>
              <td>{engineer["name"]}</td>
              <td>{engineer["department"]}</td>
              <td>
                <ReferenceLinks items={engineer["projects"]} type="Project" />
              </td>
              <td>
                <ReferenceLinks
                  items={engineer["@id"]}
                  type="engineer"
                  useIcon={true}
                />
              </td>
              <td>
                <Link href={`${engineer["@id"]}/edit`}>
                  <a>
                    <i className="bi bi-pen" aria-hidden="true" />
                    <span className="sr-only">Edit</span>
                  </a>
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
);
