//Index
export interface VersionPageProps {
  header: any
  footer: any
}
export interface LinkButtonProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string
  children: React.ReactNode
  url?: string
  category?: string
  target?: string
  className?: string
  classes?: any
  onClickEvent?: Function
  download?: boolean
}

export interface ImageProps {
  id: string
  src: string
  alt: string
  width?: number
  height?: number
  category?: string
  classes?: any
  className?: string
}

export interface HeaderComponentProps {
  header: any
}

// Window
declare global {
  interface Window {}
}
