import styles from "./SupportBlock.module.scss";
import Link from "next/link";
import {useTranslation} from "next-i18next";

export const SupportBlock = () => {

    const { t } = useTranslation('un-auth');

    return (
        <div className={styles['support']}>
            <Link href={''}>
                <a className={styles['support-link']}>
                    {t('un-auth:support', 'Поддержка')}
                </a>
            </Link>
            <span className={styles['bottom-text']}>{t('un-auth:footer-title', '© 2022 PhotoMey. Все права защищены.')}</span>
        </div>
    )
}