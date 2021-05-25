export const time = () => {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  //var hour = date.getHours();
  //var minutes = date.getMinutes();

  return year + "-" + month + "-" + day;
};
