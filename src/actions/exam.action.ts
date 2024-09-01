import { COOKIE_TOKEN, SERVER_URL } from "@/constants";
import { getCookieServer } from "@/utils";
import { myFetch } from "@/utils/myFetch";

export async function getExamHistory() {
  const response = await myFetch(`/api.exam/user/history`);
  const data = await response.json();

  return data.data;
}

export async function getExamFindByCode(code: string | string[] | undefined) {
  const response = await myFetch(`/api.exam/user/${code}`);
  const data = await response.json();

  return data.data;
}

export async function getExamById(id: string | string[] | undefined) {
  const response = await myFetch(`/api.exam/user/get-exam/${id}`);
  const data = await response.json();

  return data.data;
}

export async function takeExam(id: number, payload: Object) {
  const token = await getCookieServer(COOKIE_TOKEN);
  const response = await fetch(`${SERVER_URL}/api.exam/user/take-exam/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  const body = await response.json();
  const data = body.data;

  return data;
}
