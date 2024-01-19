import { useSuspenseQuery } from "@tanstack/react-query";
import { travelPackageApi } from "@/api/travel";

import Package from "./Package";

const Packages = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["packages"],
    queryFn: () => travelPackageApi.list("", "createdAt"),
    enabled: true,
  });

  return (
    <>
      {data?.length >= 1 ? (
        data.map((v) => <Package id={v.id} key={v.id} Package={v} />)
      ) : (
        <div>데이터가 없습니다.</div>
      )}
    </>
  );
};

export default Packages;
