import { useSuspenseQuery } from "@tanstack/react-query";

import Plan from "./Plan";
import PlanMini from "./PlanMini";

const Plans = ({ minView, setDeleteid }) => {
  const { data: plans } = useSuspenseQuery({
    queryKey: ["plan"],
    queryFn: () => myPlanApi.list("asc"),
    enabled: false,
  });

  return (
    <>
      {data?.length >= 1 ? (
        plans.map((v) =>
          minView ? (
            <PlanMini
              onClickDeleteButton={onClickDeleteButton}
              key={v.id}
              id={v.id}
              plan={v}
              setDeleteid={setDeleteid}
            />
          ) : (
            <Plan
              type={v.id % 2}
              onClickDeleteButton={onClickDeleteButton}
              key={v.id}
              id={v.id}
              plan={v}
              setDeleteid={setDeleteid}
            />
          )
        )
      ) : (
        <div>데이터가 없습니다.</div>
      )}
    </>
  );
};

export default Plans;
