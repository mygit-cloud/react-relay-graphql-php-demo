import { FunctionComponent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { fetch } from "../../utils/dataAccess";
import ReferenceLinks from "../common/ReferenceLinks";
import { Engineer } from "../../types/Engineer";

interface Props {
  engineer: Engineer;
}

export const Show: FunctionComponent<Props> = ({ engineer }) => {
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      await fetch(engineer["@id"], { method: "DELETE" });
      router.push("/engineers");
    } catch (error) {
      setError("Error when deleting the resource.");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>{`Show Engineer ${engineer["@id"]}`}</h1>
      <table className="table table-responsive table-striped table-hover">
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">name</th>
            <td>{engineer["name"]}</td>
          </tr>
          <tr>
            <th scope="row">department</th>
            <td>{engineer["department"]}</td>
          </tr>
          <tr>
            <th scope="row">projects</th>
            <td>
              <ReferenceLinks items={engineer["projects"]} type="Project" />
            </td>
          </tr>
        </tbody>
      </table>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <Link href="/engineers">
        <a className="btn btn-primary">Back to list</a>
      </Link>{" "}
      <Link href={`${engineer["@id"]}/edit`}>
        <a className="btn btn-warning">Edit</a>
      </Link>
      <button className="btn btn-danger" onClick={handleDelete}>
        <a>Delete</a>
      </button>
    </div>
  );
};