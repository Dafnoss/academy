import React from "react"
import cx from 'classnames'
import {getDateFormats} from '../../utils/dates'
import {PEOPLE} from './../../docs/people'
import logo from '../../images/logos/logo-sanbase.svg'
import styles from "./ArticleInfo.module.scss"

const DEFAULT_NAME = 'Santiment Team'

const ArticleInfo = ({title, author, date}) => {
	const name = author || DEFAULT_NAME
	const {description, imageUrl} = PEOPLE[name.toLowerCase()] || {}
	const { DD, MMM, YYYY } = getDateFormats(new Date(date))
	return (
	<section className={styles.block}>
		<h3 className={styles.title}>{title}</h3>
		<div className={styles.info}>
			<div className={cx(styles.imageWrapper, !imageUrl && styles.onlyPhoto)}>
				<img src={imageUrl || logo} alt='author' />
			</div>
			<div>
				<h4 className={styles.author}>{name}</h4>
				{date ? (
						<span className={styles.description}>{`${MMM} ${DD}, ${YYYY}`}</span>
					) : (
						<span className={styles.description}>{description}</span>
					)}
			</div>
		</div>
	</section>
)
}

export default ArticleInfo


