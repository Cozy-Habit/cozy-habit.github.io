import { getAllPosts } from '@/utils';
import Link from 'next/link';
import ArticleFeed from '../ArticleFeed/ArticleFeed';
import ProjectFeed from '../ProjectFeed/ProjectFeed';

const Feed = () => {
    const { articles, projects } = getAllPosts();

    return (
        <>
            <div className="pt-8 pb-8">
                <h2 className="p-8 pb-2 h-1 tracking-wide text-3xl mb-12 mt-0 k">
                    Latest Articles...
                </h2>
                <ArticleFeed articles={articles.slice(0, 5)} />
                {articles.length > 5 && (
                    <Link className="btn flex justify-center" href="/articles">
                        See all articles
                    </Link>
                )}
            </div>
            <div className="pt-8 pb-8">
                <h2 className="p-8 pb-2 h-1 tracking-wide text-3xl mb-12 mt-0 k">
                    Latest Projects...
                </h2>
                <ProjectFeed projects={projects.slice(0, 3)} />
                {projects.length > 3 && (
                    <Link className="btn flex justify-center" href="/projects">
                        See all projects
                    </Link>
                )}
            </div>
            <h2>Helpful resources...</h2>
            npm caching:
            https://medium.com/@ruben.alapont/npm-caching-speeding-up-your-development-process-340dcdc554b3
        </>
    );
};

export default Feed;
