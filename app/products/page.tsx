import styles from "../Home.module.css";
import Link from "next/link";

const products = () => {
    return (
       <div className={styles.main}>
            <h2 className={styles.container}>商品一覧</h2>

            <ul>
                <li>
                    <Link href="/products/smartphone">
                        <p>スマートフォン</p>
                    </Link>
                </li>
                <li>
                    <Link href="/products/smartphone">
                        <p>パソコン</p>
                    </Link>
                </li>
                <li>
                    <Link href="/products/smartphone">
                        <p>ヘッドホン</p>
                    </Link>
                </li>
            </ul>
        
       </div>
    );
}

export default products;