"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { globalApi } from "@/api/global";

const Naver = () => {
  const router = useRouter();

  useEffect(() => {
    const load = async () => {
      try {
        const currentUrl = window.location.href;
        const url = new URL(currentUrl);
        const fragment = url.hash.substring(1); // #을 제외한 파트 가져오기
        const fragmentParams = new URLSearchParams(fragment);
        const accessToken = fragmentParams.get("access_token");
        const { data } = await globalApi.naverLogin({ token: accessToken });
        if (!data.user.nickname) {
          router.push({
            pathname: "/login/my-profile",
            query: { data: JSON.stringify(data) },
          });
        }
      } catch (err) {
        window.location.href = "uniwebview://login?user=";
      }
    };
    load();
  }, [router]);

  return <div />;
};

export default Naver;
