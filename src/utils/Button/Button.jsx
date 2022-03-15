import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Button.scss'

/**
 * 
 * @param { secundary href value disabled onClick icon className} props 
 * @returns button o Link si se le pasa href, primary defaul
 */
export default function Button(props) {
  const {
    secundary = false,
    value,
    className = "",
    onClick,
    disabled = false,
    icon = false
  } = props


  return (
    <button className={secundary ? `${className} shadow rounded secundary-button` : `${className} shadow rounded primary-button`} onClick={onClick} disabled={disabled}>
      {icon ? <span><FontAwesomeIcon icon={icon} /></span> : null}
      {value ? <span>{value}</span> : null}
    </button>
  )
}