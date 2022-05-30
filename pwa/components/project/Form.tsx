import { FunctionComponent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ErrorMessage, Formik } from "formik";
import { fetch } from "../../utils/dataAccess";
import { Project } from "../../types/Project";

interface Props {
  project?: Project;
}

export const Form: FunctionComponent<Props> = ({ project }) => {
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      await fetch(project["@id"], { method: "DELETE" });
      router.push("/projects");
    } catch (error) {
      setError(`Error when deleting the resource: ${error}`);
      console.error(error);
    }
  };

  return (
    <div>
      <h1>{project ? `Edit Project ${project["@id"]}` : `Create Project`}</h1>
      <Formik
        initialValues={project ? { ...project } : new Project()}
        validate={(values) => {
          const errors = {};
          // add your validation logic here
          return errors;
        }}
        onSubmit={async (values, { setSubmitting, setStatus, setErrors }) => {
          const isCreation = !values["@id"];
          try {
            await fetch(isCreation ? "/projects" : values["@id"], {
              method: isCreation ? "POST" : "PUT",
              body: JSON.stringify(values),
            });
            setStatus({
              isValid: true,
              msg: `Element ${isCreation ? "created" : "updated"}.`,
            });
            router.push("/projects");
          } catch (error) {
            setStatus({
              isValid: false,
              msg: `${error.defaultErrorMsg}`,
            });
            setErrors(error.fields);
          }
          setSubmitting(false);
        }}
      >
        {({
          values,
          status,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-control-label" htmlFor="_content">
                content
              </label>
              <input
                name="content"
                id="_content"
                value={values.content ?? ""}
                type="text"
                placeholder=""
                className={`form-control${
                  errors.content && touched.content ? " is-invalid" : ""
                }`}
                aria-invalid={errors.content && touched.content}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage
              className="text-danger"
              component="div"
              name="content"
            />
            <div className="form-group">
              <label className="form-control-label" htmlFor="_leader">
                leader
              </label>
              <input
                name="leader"
                id="_leader"
                value={values.leader ?? ""}
                type="text"
                placeholder=""
                className={`form-control${
                  errors.leader && touched.leader ? " is-invalid" : ""
                }`}
                aria-invalid={errors.leader && touched.leader}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage
              className="text-danger"
              component="div"
              name="leader"
            />
            <div className="form-group">
              <label className="form-control-label" htmlFor="_startDate">
                startDate
              </label>
              <input
                name="startDate"
                id="_startDate"
                value={values.startDate ?? ""}
                type="text"
                placeholder=""
                className={`form-control${
                  errors.startDate && touched.startDate ? " is-invalid" : ""
                }`}
                aria-invalid={errors.startDate && touched.startDate}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage
              className="text-danger"
              component="div"
              name="startDate"
            />
            <div className="form-group">
              <label className="form-control-label" htmlFor="_engineer">
                engineer
              </label>
              <input
                name="engineer"
                id="_engineer"
                value={values.engineer ?? ""}
                type="text"
                placeholder=""
                className={`form-control${
                  errors.engineer && touched.engineer ? " is-invalid" : ""
                }`}
                aria-invalid={errors.engineer && touched.engineer}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <ErrorMessage
              className="text-danger"
              component="div"
              name="engineer"
            />

            {status && status.msg && (
              <div
                className={`alert ${
                  status.isValid ? "alert-success" : "alert-danger"
                }`}
                role="alert"
              >
                {status.msg}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-success"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
      <Link href="/projects">
        <a className="btn btn-primary">Back to list</a>
      </Link>
      {project && (
        <button className="btn btn-danger" onClick={handleDelete}>
          <a>Delete</a>
        </button>
      )}
    </div>
  );
};
