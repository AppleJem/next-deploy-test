import styles from './CatList.module.css';

import CatCard from './CatCard';

function CatList(props) {
    return <div className={styles['cat-list-container']}>
        {props.catsArr.map((cat) => {
            return <CatCard catInfo={cat} />
        })}
    </div>
}

export default CatList;