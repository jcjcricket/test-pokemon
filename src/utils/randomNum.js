export const generateRandomNum = () => {
  let num = (Math.random() * 1000000).toFixed().toString().slice(0,4);
  return num
}