import React from "react"

const LinkButton = ({
  id,
  children,
  url,
  target,
  classes,
  className,
  onClickEvent,
  download,
  ...props
}) => {
  return (
    <a
      href={`${url?.trim()}`}
      target={`${target?.trim() ? target.trim() : "_self"}`}
      className={className ?? ""}
      style={{ ...classes }}
      onClick={() => {
        onClickEvent && onClickEvent()
      }}
      download={download ?? false}
    >
      {children}
    </a>
  )
}

export default LinkButton
