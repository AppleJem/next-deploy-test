
import styles from './CatCard.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

function CatCard({ catInfo }) {
    const router = useRouter();

    function openDetailsHandler() {
        router.push(`/cats/${catInfo.id}`);
    }
    return <div className={styles.card}>
        <img src={catInfo.image} alt="image of cat" />
        <h4>{catInfo.name}</h4>
        <p>{catInfo.description}</p>
        <button onClick={openDetailsHandler}>See more details</button>
    </div>
}

export default CatCard;