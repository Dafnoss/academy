import React, { useRef } from "react"
import withSizes from "react-sizes"
import cx from "classnames"
import { Link } from "gatsby"
import Icon from "@santiment-network/ui/Icon"
import { mapSizesToProps } from "../../utils/sizes"
import Dropdown from "../Dropdown/Dropdown"
import dropdownStyles from "../Dropdown/Dropdown.module.scss"
import styles from "./Header.module.scss"
import SantimentProductsTooltip from "../SantimentProductsTooltip/SantimentProductsTooltip"

const Header = ({ isDesktop, isTablet, className }) => {
  const toggle = useRef(null)

  return (
    <header className={cx(styles.wrapper, className)}>
      <div className={cx(styles.header, 'container')}>
        <SantimentProductsTooltip>
          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="none"><circle cx="19" cy="19" r="18.5" fill="#fff" stroke="#E7EAF3"/><path d="M9 18.648c0-.552.135-.966.407-1.242.272-.276.639-.414 1.102-.414.462 0 .83.139 1.101.414.272.276.407.69.407 1.242 0 .572-.135.995-.407 1.27-.272.276-.639.415-1.101.415-.463 0-.83-.139-1.102-.414-.272-.276-.407-.7-.407-1.271zM15.547 23.714c.403.236.88.438 1.434.606a5.853 5.853 0 0 0 1.705.251c.664 0 1.227-.163 1.69-.49.462-.328.694-.858.694-1.591 0-.615-.142-1.12-.423-1.517a4.733 4.733 0 0 0-1.07-1.07c-.433-.317-.901-.609-1.404-.874a7.48 7.48 0 0 1-1.404-.957 4.788 4.788 0 0 1-1.07-1.326c-.283-.511-.423-1.16-.423-1.945 0-1.257.346-2.204 1.04-2.843.695-.639 1.676-.958 2.943-.958.824 0 1.539.074 2.142.222.603.147 1.127.35 1.57.606l-.574 1.774a6.31 6.31 0 0 0-1.327-.488 6.23 6.23 0 0 0-1.54-.192c-.724 0-1.251.147-1.584.443-.332.296-.498.76-.498 1.39 0 .493.14.912.423 1.256.282.346.638.66 1.07.947.433.286.901.576 1.404.872.502.296.97.646 1.404 1.05.432.403.789.887 1.07 1.448.283.561.423 1.267.423 2.114a4.51 4.51 0 0 1-.272 1.567c-.18.493-.457.921-.83 1.286a4.075 4.075 0 0 1-1.388.872c-.553.217-1.202.326-1.946.326-.885 0-1.65-.084-2.293-.252-.644-.167-1.188-.389-1.63-.665l.665-1.862zM25.984 18.648c0-.552.136-.966.408-1.242.271-.276.638-.414 1.1-.414.464 0 .83.139 1.102.414.272.276.407.69.407 1.242 0 .572-.135.995-.407 1.27-.272.276-.638.415-1.101.415-.463 0-.83-.139-1.101-.414-.272-.276-.408-.7-.408-1.271z" fill="#2F354D"/></svg>
        </SantimentProductsTooltip>

      {false && (<>
      <label htmlFor='hamburger'>
        <Icon type='hamburger' />
      </label>
      <input id='hamburger' type='checkbox' ref={toggle} />
      <nav className={styles.nav}>
        <label htmlFor='hamburger' className={styles.close}>
          <Icon type='close' />
        </label>
        {isDesktop || isTablet ? (
          <Dropdown
            title={<Icon type='profile' />}
            isDesktop={isDesktop}
          >
            <div className={dropdownStyles.list}>
              <Link to="/login">Log in</Link>
            </div>
          </Dropdown>
        ) : (
          <Link to="/login">Log in</Link>
        )}
      </nav>
    </>)}
    </div>
    </header>
  )
}

export default withSizes(mapSizesToProps)(Header)
