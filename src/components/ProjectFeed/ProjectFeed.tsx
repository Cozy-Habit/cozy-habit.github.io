import { PostData, getEstimatedReadingTime } from '@/utils';
import Link from 'next/link';
import path from 'path';

const ProjectFeed = ({ projects }: { projects: PostData }) => {
    const publicPostsDir = path.join('.', '_generated', 'posts');

    return (
        <ul className="list pl-0 mt-0 list-none">
            {projects.map(({ dir, content, metadata }, index) => {
                if (metadata) {
                    const {
                        title,
                        date,
                        descr,
                        draft,
                        tags,
                        websiteLink,
                        repoLink,
                    } = metadata.data as {
                        title: string;
                        date: string;
                        descr: string;
                        thumbnail: string;
                        draft: boolean;
                        tags: string;
                        websiteLink: string;
                        repoLink: string;
                    };
                    const readingTime = getEstimatedReadingTime(content);
                    if (!draft)
                        return (
                            <li key={index} className="px-8">
                                <a href={`${dir}`} className="no-underline">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex gap-4 relative">
                                            <img
                                                className="w-full h-full sm:w-full sm:h-80 object-cover rounded-box m-0!"
                                                src={`${publicPostsDir}/projects/${dir}/logo.webp`}
                                            />
                                            <div className="flex gap-4 absolute bottom-0 left-0 p-4">
                                                {
                                                    <Link href={dir}>
                                                        <img
                                                            src={'./docs.svg'}
                                                            alt=""
                                                            height={24}
                                                            width={24}
                                                            className="btn p-0 m-0!"
                                                        />
                                                    </Link>
                                                }
                                                {repoLink && (
                                                    <Link href={repoLink}>
                                                        <img
                                                            src={'./github.svg'}
                                                            alt=""
                                                            height={16}
                                                            width={16}
                                                            className="btn p-0 m-0!"
                                                        />
                                                    </Link>
                                                )}
                                                {websiteLink && (
                                                    <Link href={websiteLink}>
                                                        <img
                                                            src={
                                                                './external.svg'
                                                            }
                                                            alt=""
                                                            height={24}
                                                            width={24}
                                                            className="btn p-0 m-0!"
                                                        />
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="card-title mt-0 mb-0">
                                                {title}
                                            </h3>
                                            <p className="font-normal">
                                                {descr}
                                            </p>
                                            <p className=" font-light">
                                                {tags}
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

export default ProjectFeed;
