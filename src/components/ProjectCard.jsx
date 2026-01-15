// components/ProjectCard.jsx
import PropTypes from "prop-types";

export default function ProjectCard({
  imgSrc,
  title,
  stack = {},
  projectLink,
  className = ""
}) {
  return (

    
    <div  className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors" + className}>
        <article className={`rounded-2xl p-2`}>
        {imgSrc && (
            <img
            src={imgSrc}
            alt={title}
            className="h-44 w-full rounded-xl object-cover"
            />
        )}

        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex-1">
            <h3 className="text-lg font-semibold text-white">{title}</h3>

            {/* Grouped Stack */}
            {stack && Object.keys(stack).length > 0 && (
                <div className="mt-3 space-y-2">
                {Object.entries(stack).map(([group, items]) => (
                    <div key={group}>
                    <div className="text-xs font-medium uppercase tracking-wider text-zinc-500 mb-2">
                            <h4 className="text-xs uppercase tracking-wider text-zinc-500">{group} :- </h4>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {items.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-md border border-zinc-700/60 bg-zinc-800/60 px-2.5 py-0.5 text-xs text-zinc-300 hover:border-sky-400 hover:text-sky-400 transition-colors"
                        >
                            {tech}
                        </span>
                        ))}
                    </div>
                    </div>
                ))}
                </div>
            )}
            </div>

            {/* Action button */}
            {projectLink && (
            <a
                href={projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex h-11 w-11 items-center justify-center rounded-lg bg-sky-500 text-zinc-950 hover:bg-sky-400 transition-colors sm:mt-0 sm:ml-4"
                aria-label={`Open ${title}`}
            >
                <span className="material-symbols-rounded" aria-hidden="true">
                arrow_outward
                </span>
            </a>
            )}
        </div>
        </article>
    </div>

  );
}

ProjectCard.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  stack: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
  projectLink: PropTypes.string,
  className: PropTypes.string,
};
