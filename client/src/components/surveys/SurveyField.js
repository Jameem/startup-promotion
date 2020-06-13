import React from "react"

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
      <label>{touched && error}</label>
    </div>
  )
}
