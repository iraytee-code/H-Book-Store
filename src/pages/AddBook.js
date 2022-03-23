import React, {Fragment} from "react";
import { NavBarUser } from "../components";

const AddBook = () => {
  return (
    <Fragment>
      <NavBarUser />
      <section className="mt-5">
        <div className="container my-2">
          <div className="card">
            <div className="card-header">
              <i className="fa fa-plus-square" aria-hidden="true" />
              Add New Book
            </div>
            <div className="card-body">
              <form>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="inputTitle" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="inputTitle"
                      placeholder="Enter Book Title"
                      aria-label="Title"
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="inputAuthor" className="form-label">
                      Author
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      id="inputAuthor"
                      placeholder="Enter Book Author"
                      aria-label="Author"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="inputCoverPhoto" className="form-label">
                      Cover Photo URL
                    </label>
                    <div className="input-group">
                      <input
                        type="url"
                        className="form-control form-control-sm"
                        id="inputCoverPhoto"
                        placeholder="Enter Book Cover Photo URL"
                        aria-label="coverphoto"
                        aria-describedby="basic-addon1"
                      />
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa fa-lock icon" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                  <div className="col">
                    <label htmlFor="inputNumber" className="form-label">
                      ISBN Number
                    </label>
                    <input
                      type="number"
                      className="form-control form-control-sm"
                      id="inputNumber"
                      placeholder="Enter Book ISBN Number"
                      aria-label="Isbn"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="inputPrice" className="form-label">
                      Price
                    </label>
                    <input
                      type="number"
                      className="form-control form-control-sm"
                      id="inputPrice"
                      placeholder="Enter Book Cover Price"
                      aria-label="price"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div className="col">
                    <label htmlFor="inputLanguage" className="form-label">
                      Language
                    </label>
                    <select
                      className="form-select form-select-sm"
                      aria-label="language"
                    >
                      <option selected>Select Language</option>
                      <option value="German">German</option>
                      <option value="French">French</option>
                      <option value="Yoruba">Yoruba</option>
                    </select>
                  </div>
                  <div className="col">
                    <label htmlFor="inputGenre" className="form-label">
                      Genre
                    </label>
                    <select
                      className="form-select form-select-sm"
                      aria-label="Genre"
                    >
                      <option selected>Select Genre</option>
                      <option value="fiction">Fiction</option>
                      <option value="mystery">Mystery</option>
                      <option value="science fiction">Science Fiction</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="card-footer d-flex justify-content-end">
              <a className="btn btn-success me-2" href="./dashboard.html">
                <i className="fa fa-sign-in px-1" aria-hidden="true" />
                Save
              </a>
              <a className="btn btn-primary me-2" href="./index.html">
                <i className="fa fa-undo px-1" aria-hidden="true" />
                Reset
              </a>
              <a className="btn btn-primary me-2" href="./booklist.html">
                <i className="fa fa-list px-1" aria-hidden="true" />
                Book List
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default AddBook;
