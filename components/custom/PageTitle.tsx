interface IPageTitle {
  pageTitle: string;
}

const PageTitle = ({ pageTitle }: IPageTitle) => {
  return (
    <div className="flex items-center ">
      <h1 className="text-lg font-semibold md:text-2xl">
        {pageTitle ?? "Page Title"}
      </h1>
    </div>
  );
};

export default PageTitle;
