export const extractZodMessage = (error) => {
  return error.issues[0]?.message ?? "유효성 검사 중 문제가 발생했습니다.";
}