// const BTextField = ({ icon, className, controlId, ...props }) => {
//   const baseClass = "m-1 p-1"
//   const allClass = clsx(
//     baseClass, className
//   )
//   const [field, meta] = useField(props);

//   return (
//     // <Form.Group className={allClass} controlId={controlId}>
//     //   <InputGroup className={baseClass}>
//     //     <InputGroup>
//     //     <Form.Label>
//     //     <i className={allClass} />
//     //     </Form.Label>

//     //     </InputGroup.Text>
//     //     <FormControl
//     //         {...props}
//     //         {...field}
//     //         isInvalid={meta.error && meta.touched}
//     //         isValid={!meta.error && meta.touched}
//     //     />
//     //   </InputGroup>
//     //   {meta.touched && meta.error ? (
// 		// 		<Form.Control.Feedback type="invalid">
// 		// 			{meta.error}
// 		// 		</Form.Control.Feedback>
// 		// 	) : null}
//     //   {console.log("form control:", FormControl)}
//     // </Form.Group>
//     <Form.Group className={allClass} controlId={controlId}>
// 			<Form.Label>
// 				<span className="text-danger">*</span>
// 				{/* {label} */}
// 			</Form.Label>
// 			<Form.Control
// 				{...props}
// 				{...field}
// 				isInvalid={meta.error && meta.touched}
// 				isValid={!meta.error && meta.touched}
// 			/>
// 			{meta.touched && meta.error ? (
// 				<Form.Control.Feedback type="invalid">
// 					{meta.error}
// 				</Form.Control.Feedback>
// 			) : null}
// 		</Form.Group>
//   );

// };

import React from "react";
import { Form,InputGroup } from "react-bootstrap";
import PropTypes from "prop-types";
import clsx from "classnames";
import { useField } from "formik";

const BTextField = ({ className, controlId, ...props }) => {
  const baseClass = "mb-2";
  const allClass = clsx(baseClass, className);
  const [field, meta] = useField(props);
  return (
    <Form.Group controlId={controlId} className={baseClass}>
    <InputGroup >
      <InputGroup.Text>
      <i className={allClass} />
      </InputGroup.Text>
      <Form.Control
          {...props}
          {...field}
          isInvalid={meta.error && meta.touched}
          isValid={!meta.error && meta.touched}
        />

      {meta.touched && meta.error ? (
        <Form.Control.Feedback type="invalid">
          {meta.error}
        </Form.Control.Feedback>
      ) : null}
    </InputGroup>
    </Form.Group>
  );
};

BTextField.defaultProps = {};

BTextField.propTypes = {
  label: PropTypes.string,
};

export default BTextField;
