"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { globalApi, setToken } from "@/api/global";
import { LocalSave } from "@/LocalSave";

const KaKaoLogin = () => {
  const router = useRouter();

  useEffect(() => {
    const loadData = async () => {
      try {
        const params = new URL(document.location.toString()).searchParams;
        const code = params.get("code"); // 인가코드 받는 부분
        const { data } = await globalApi.kakaoLogin({ code });
        console.log(data);
        if (data.isJoin) {
          setToken(data.token);
          LocalSave.setToken(data.token);
          window.location.href = "/";
        } else {
          router.replace(`/regist?provider=${data.provider}&snsId=${data.id}`);
        }
      } catch (err) {
        window.location.href = "/";
      }
    };
    loadData();
  }, [router]);

  return <div />;
};

export default KaKaoLogin;
