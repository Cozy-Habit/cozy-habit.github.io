import { ArticleFeed } from '@/components';
import { getArticles } from '@/utils';

const Page = () => {
    const articles = getArticles();
    console.log(articles);

    return (
        <div className="p-8 prose">
            <h1>All Articles</h1>
            <ArticleFeed articles={articles} />
        </div>
    );
};

export default Page;
