import { data } from "@/data/info";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectNavigationProps {
  currentProjectId: string;
}

const ProjectNavigation: React.FC<ProjectNavigationProps> = ({
  currentProjectId,
}) => {
  // Find the current project index
  const currentIndex = data.findIndex(
    (project) => project.id === currentProjectId
  );

  // Determine the previous and next project indices
  const prevIndex = (currentIndex - 1 + data.length) % data.length;
  const nextIndex = (currentIndex + 1) % data.length;

  const prevProject = data[prevIndex];
  const nextProject = data[nextIndex];

  return (
    <div className="max-w-[1220px] mx-auto">
      <p className="text-lg font-medium ml-6 text-customGray">
        View more projects
      </p>
      <div className="flex justify-between items-center mt-8">
        <Link
          to={
            prevProject.type === "report"
              ? `/work/report/${prevProject.id}`
              : `/work/${prevProject.id}`
          }
          className="flex items-center text-3xl font-medium"
        >
          <ChevronLeft className="mr-2" />
          {prevProject.name}
        </Link>

        <Link
          to={
            nextProject.type === "report"
              ? `/work/report/${nextProject.id}`
              : `/work/${nextProject.id}`
          }
          className="flex items-center text-3xl font-medium"
        >
          {nextProject.name}
          <ChevronRight className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectNavigation;
