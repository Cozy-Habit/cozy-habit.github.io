import { getEstimatedReadingTime, PostData } from '@/utils';
import Link from 'next/link';
import path from 'path';

const ArticleFeed = ({ articles }: { articles: PostData }) => {
    const publicPostsDir = path.join('.', '_generated', 'posts');

    return (
        <ul className="list pl-0 mt-0">
            {articles.map(({ dir, content, metadata }, index) => {
                if (metadata) {
                    const { title, date, descr, draft } = metadata.data as {
                        title: string;
                        date: string;
                        descr: string;
                        draft: boolean;
                    };
                    const readingTime = getEstimatedReadingTime(content);
                    if (!draft)
                        return (
                            <li key={index} className="list-row px-8">
                                <a href={`${dir}`} className="no-underline">
                                    <div className="flex  gap-4">
                                        <img
                                            className="size-24 rounded-box m-0!"
                                            src={`${publicPostsDir}/articles/${dir}/logo.webp`}
                                        />
                                        <div>
                                            <h3 className="card-title mt-0 mb-0">
                                                {title}
                                            </h3>
                                            <p className="font-normal">
                                                {descr}
                                            </p>
                                            <div className="flex gap-4 items-center">
                                                <p className=" font-light">
                                                    {date}
                                                </p>
                                                <div className="badge badge-soft badge-primary badge-sm">
                                                    {readingTime} min
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        );
                }
            })}
        </ul>
    );
};

export default ArticleFeed;
