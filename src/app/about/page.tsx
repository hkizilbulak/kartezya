import SidebarLink from "@/components/Docs/SidebarLink";

export default function About() {
  return (
    <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/4">
            <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
              <ul className="space-y-2">
                <SidebarLink />
              </ul>
            </div>
          </div>

          <div className="w-full px-4 lg:w-3/4">
            <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <p className="text-body-color dark:text-body-color-dark text-base">
                We are a team of young and talented individuals with a start-up
                culture that develops agile software. We provide services in
                fields such as; web systems, software architecture, content
                management systems, big data consultancy and software
                consultancy. We aim to add value and difference to every project
                we take part. We care about innovation and sharing with our
                valued customers. We are a team that knows how to take
                responsibility and is aware of the duties given. We are open to
                all kinds of ideas and innovations.
              </p>

              <p className="text-body-color dark:text-body-color-dark text-base">
                We have a team of people who have experiences in their fields
                and who have been involved in various tasks in successful
                projects of big corporate companies. We collect these
                experiences in a joint venture and reflect them to all our
                projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
