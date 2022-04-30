import Head from 'next/head';

interface IMetaTagsProps {
    title: string;
    description?: string;
    keywords?: string;
}

export const MetaTags = (props: IMetaTagsProps) => {
    return (
        <Head>
            <title>{props.title || 'AHASHA'}</title>
            {props.description && <meta name="description" content={props.description}></meta>}
            {props.keywords && <meta name="keywords" content={props.keywords}></meta>}
        </Head>
    );
};
