import moment from "moment";
export function formatTime(milliseconds: number) {
  const totalSeconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes} phút ${seconds} giây`;
}
export function formattedDate(dateString: string) {
  return moment.utc(dateString).local().format("DD/MM/YYYY HH:mm:ss");
}
export function formatSeconds(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  return `${minutes} phút`;
}
