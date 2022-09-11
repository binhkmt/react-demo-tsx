// import { Breadcrumb, BreadcrumbItem } from "@hospitalrun/components";

// import useTranslator from "../../shared/hooks/useTranslator";
// import { RootState } from "../../shared/store";

const Breadcrumbs = () => {
  //   const { t } = useTranslator();
  //   const { breadcrumbs } = useSelector((state: RootState) => state.breadcrumbs);

  //   if (breadcrumbs.length === 0) {
  //     return null;
  //   }

  return (
    <>
      <div>Dashboard/abc</div>
    </>
    // <Breadcrumb>
    //   {breadcrumbs.map(({ text, location }, index) => {
    //     const isLast = index === breadcrumbs.length - 1;
    //     const onClick = !isLast ? () => history.push(location) : undefined;

    //     return (
    //       <BreadcrumbItem key={location} active={isLast} onClick={onClick}>
    //         {text}
    //       </BreadcrumbItem>
    //     );
    //   })}
    // </Breadcrumb>
  );
};

export default Breadcrumbs;
