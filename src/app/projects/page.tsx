import { ProjectFeed } from '@/components';
import { getProjects } from '@/utils';

const Page = () => {
    const projects = getProjects();

    return (
        <div className="p-8 prose">
            <h1>All Projects</h1>
            <ProjectFeed projects={projects} />
        </div>
    );
};

export default Page;
