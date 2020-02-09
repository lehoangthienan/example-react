import numeral from 'numeral';

export const formatCurrency = price => {
  if (!price) return 'Free';
  return `${numeral(price).format('0,0')} VND`;
};

export function changeAlias(str) {
  let strTemp = str;
  strTemp = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
  strTemp = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
  strTemp = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
  strTemp = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
  strTemp = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
  strTemp = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
  strTemp = str.replace(/đ/g, 'd');
  strTemp = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
  strTemp = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
  strTemp = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
  strTemp = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
  strTemp = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
  strTemp = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
  strTemp = str.replace(/Đ/g, 'D');
  return strTemp;
}

export const returnArr = () => [1, 2, 3, 4];
