import { useSuspenseQuery } from "@tanstack/react-query";
import { travelPackageApi } from "@/api/travel";

import ReservedTravel from "./ReservedTravel";

const ReservedTravels = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["reserved"],
    queryFn: () => travelPackageApi.getReserve(),
    enabled: false,
  });
  return (
    <>
      {data?.length >= 1 ? (
        data.map((v) => <ReservedTravel key={v.id} reserve={v} />)
      ) : (
        <div>데이터가 없습니다.</div>
      )}
    </>
  );
};

export default ReservedTravels;
